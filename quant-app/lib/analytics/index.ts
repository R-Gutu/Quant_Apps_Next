// Analytics Module for Quant Apps
// Handles Google Analytics 4 + Custom event tracking

import Cookies from 'js-cookie';

// ============================================
// CONFIGURATION - Replace with your IDs
// ============================================
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-TH4K1DBJ0K';

// ============================================
// TYPES
// ============================================
export type EventCategory = 
  | 'form_submission'
  | 'button_click'
  | 'phone_call'
  | 'external_link'
  | 'page_view'
  | 'scroll'
  | 'engagement';

export type FormSource = 
  | 'main_page_form'
  | 'talk_modal'
  | 'free_promo_modal'
  | 'footer_form'
  | 'pricing_form';

export interface TrackingEvent {
  category: EventCategory;
  action: string;
  label?: string;
  value?: number;
  formSource?: FormSource;
  customData?: Record<string, unknown>;
}

export interface UserData {
  visitorId: string;
  sessionId: string;
  firstVisit: string;
  lastVisit: string;
  visitCount: number;
  referrer: string;
  landingPage: string;
  device: {
    type: 'mobile' | 'tablet' | 'desktop';
    os: string;
    browser: string;
    screenSize: string;
  };
  location?: {
    country?: string;
    city?: string;
    timezone?: string;
  };
}

// ============================================
// VISITOR ID MANAGEMENT
// ============================================
const VISITOR_COOKIE = 'quant_visitor_id';
const SESSION_COOKIE = 'quant_session_id';
const VISIT_DATA_COOKIE = 'quant_visit_data';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}

export function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  
  let visitorId = Cookies.get(VISITOR_COOKIE);
  if (!visitorId) {
    visitorId = `v_${generateId()}`;
    Cookies.set(VISITOR_COOKIE, visitorId, { expires: 365 * 2 }); // 2 years
  }
  return visitorId;
}

export function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  
  let sessionId = Cookies.get(SESSION_COOKIE);
  if (!sessionId) {
    sessionId = `s_${generateId()}`;
    Cookies.set(SESSION_COOKIE, sessionId, { expires: 1/48 }); // 30 minutes
  }
  return sessionId;
}

// ============================================
// DEVICE DETECTION
// ============================================
function getDeviceInfo() {
  if (typeof window === 'undefined') {
    return { type: 'desktop' as const, os: 'unknown', browser: 'unknown', screenSize: '' };
  }

  const ua = navigator.userAgent;
  
  // Device type
  let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';
  if (/Mobi|Android/i.test(ua)) type = 'mobile';
  else if (/Tablet|iPad/i.test(ua)) type = 'tablet';
  
  // OS
  let os = 'unknown';
  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Mac/i.test(ua)) os = 'macOS';
  else if (/Linux/i.test(ua)) os = 'Linux';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/iOS|iPhone|iPad/i.test(ua)) os = 'iOS';
  
  // Browser
  let browser = 'unknown';
  if (/Chrome/i.test(ua) && !/Edge|Edg/i.test(ua)) browser = 'Chrome';
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
  else if (/Firefox/i.test(ua)) browser = 'Firefox';
  else if (/Edge|Edg/i.test(ua)) browser = 'Edge';
  
  const screenSize = `${window.screen.width}x${window.screen.height}`;
  
  return { type, os, browser, screenSize };
}

// ============================================
// VISIT TRACKING
// ============================================
export function trackVisit(): UserData {
  if (typeof window === 'undefined') {
    return {} as UserData;
  }

  const visitorId = getVisitorId();
  const sessionId = getSessionId();
  const device = getDeviceInfo();
  const now = new Date().toISOString();
  
  // Get or create visit data
  let visitData = {
    firstVisit: now,
    visitCount: 0,
    landingPage: window.location.pathname,
    referrer: document.referrer || 'direct',
  };
  
  const existingData = Cookies.get(VISIT_DATA_COOKIE);
  if (existingData) {
    try {
      const parsed = JSON.parse(existingData);
      visitData = {
        ...parsed,
        visitCount: parsed.visitCount + 1,
      };
    } catch {
      // Use default
    }
  }
  
  // Update cookie
  Cookies.set(VISIT_DATA_COOKIE, JSON.stringify({
    ...visitData,
    lastVisit: now,
  }), { expires: 365 });
  
  return {
    visitorId,
    sessionId,
    firstVisit: visitData.firstVisit,
    lastVisit: now,
    visitCount: visitData.visitCount,
    referrer: visitData.referrer,
    landingPage: visitData.landingPage,
    device,
    location: {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  };
}

// ============================================
// GOOGLE ANALYTICS 4 INTEGRATION
// ============================================
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function initGA() {
  if (typeof window === 'undefined' || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
  
  // Add gtag script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll send manually for better control
  });
}

// ============================================
// EVENT TRACKING
// ============================================
export function trackEvent(event: TrackingEvent) {
  const userData = {
    visitorId: getVisitorId(),
    sessionId: getSessionId(),
    timestamp: new Date().toISOString(),
    page: typeof window !== 'undefined' ? window.location.pathname : '',
  };

  const eventData = {
    ...event,
    ...userData,
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', eventData);
  }

  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      form_source: event.formSource,
      visitor_id: userData.visitorId,
      session_id: userData.sessionId,
      ...event.customData,
    });
  }

  // Store event locally for backup/debugging
  storeEventLocally(eventData);
  
  return eventData;
}

// ============================================
// LOCAL EVENT STORAGE (Backup)
// ============================================
const LOCAL_EVENTS_KEY = 'quant_analytics_events';
const MAX_LOCAL_EVENTS = 100;

function storeEventLocally(event: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  
  try {
    const existing = localStorage.getItem(LOCAL_EVENTS_KEY);
    const events = existing ? JSON.parse(existing) : [];
    events.push(event);
    
    // Keep only last MAX_LOCAL_EVENTS
    const trimmed = events.slice(-MAX_LOCAL_EVENTS);
    localStorage.setItem(LOCAL_EVENTS_KEY, JSON.stringify(trimmed));
  } catch {
    // LocalStorage might be full or disabled
  }
}

export function getStoredEvents(): Record<string, unknown>[] {
  if (typeof window === 'undefined') return [];
  try {
    const events = localStorage.getItem(LOCAL_EVENTS_KEY);
    return events ? JSON.parse(events) : [];
  } catch {
    return [];
  }
}

// ============================================
// CONVENIENCE FUNCTIONS
// ============================================

// Track form submissions
export function trackFormSubmission(formSource: FormSource, formData?: Record<string, unknown>) {
  return trackEvent({
    category: 'form_submission',
    action: 'submit',
    label: formSource,
    formSource,
    customData: {
      ...formData,
      // Don't log sensitive data
      email: formData?.email ? 'provided' : 'not_provided',
      phone: formData?.phone ? 'provided' : 'not_provided',
    },
  });
}

// Track button clicks
export function trackButtonClick(buttonName: string, location?: string) {
  return trackEvent({
    category: 'button_click',
    action: 'click',
    label: buttonName,
    customData: { location },
  });
}

// Track phone calls
export function trackPhoneCall(phoneNumber: string, buttonLocation: string) {
  return trackEvent({
    category: 'phone_call',
    action: 'call_initiated',
    label: phoneNumber,
    customData: { buttonLocation },
  });
}

// Track external link clicks
export function trackExternalLink(url: string, linkText: string) {
  return trackEvent({
    category: 'external_link',
    action: 'click',
    label: url,
    customData: { linkText },
  });
}

// Track page views
export function trackPageView(path?: string) {
  const pagePath = path || (typeof window !== 'undefined' ? window.location.pathname : '');
  
  // Also send to GA
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: document.title,
    });
  }
  
  return trackEvent({
    category: 'page_view',
    action: 'view',
    label: pagePath,
  });
}
