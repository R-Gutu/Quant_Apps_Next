'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  initGA, 
  trackVisit, 
  trackPageView, 
  getConsentSettings,
  type UserData 
} from './index';
import { getConsentSettings as getCookieConsent } from '@/components/CookieConsent';
import { usePathname } from 'next/navigation';

interface AnalyticsContextType {
  userData: UserData | null;
  isEnabled: boolean;
  consentGiven: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  userData: null,
  isEnabled: false,
  consentGiven: false,
});

export function useAnalytics() {
  return useContext(AnalyticsContext);
}

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const pathname = usePathname();

  // Initialize analytics when consent is given
  useEffect(() => {
    const checkConsent = () => {
      const consent = getCookieConsent();
      if (consent?.analytics) {
        setConsentGiven(true);
        setIsEnabled(true);
        
        // Initialize GA if not already done
        initGA();
        
        // Track visit
        const data = trackVisit();
        setUserData(data);
      }
    };

    // Check on mount
    checkConsent();

    // Listen for consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      if (event.detail?.analytics) {
        setConsentGiven(true);
        setIsEnabled(true);
        initGA();
        const data = trackVisit();
        setUserData(data);
      } else {
        setIsEnabled(false);
      }
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate as EventListener);
    
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate as EventListener);
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (isEnabled && pathname) {
      trackPageView(pathname);
    }
  }, [pathname, isEnabled]);

  return (
    <AnalyticsContext.Provider value={{ userData, isEnabled, consentGiven }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// Re-export tracking functions for convenience
export { 
  trackEvent, 
  trackFormSubmission, 
  trackButtonClick, 
  trackPhoneCall, 
  trackExternalLink,
  trackPageView,
  getVisitorId,
  getSessionId,
} from './index';
