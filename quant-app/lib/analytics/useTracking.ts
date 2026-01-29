'use client';

import { useCallback } from 'react';
import { useAnalytics } from './AnalyticsProvider';
import {
  trackFormSubmission,
  trackButtonClick,
  trackPhoneCall,
  trackExternalLink,
  type FormSource,
} from './index';

/**
 * Custom hook for tracking user interactions
 * Only tracks if analytics consent was given
 */
export function useTracking() {
  const { isEnabled, userData } = useAnalytics();

  return {
    isEnabled,
    userData,
    
    // Form submission tracking
    trackForm: useCallback(
      (formSource: FormSource, formData?: Record<string, unknown>) => {
        if (!isEnabled) return;
        return trackFormSubmission(formSource, formData);
      },
      [isEnabled]
    ),
    
    // Button click tracking
    trackClick: useCallback(
      (buttonName: string, location?: string) => {
        if (!isEnabled) return;
        return trackButtonClick(buttonName, location);
      },
      [isEnabled]
    ),
    
    // Phone call tracking
    trackCall: useCallback(
      (phoneNumber: string, buttonLocation: string) => {
        if (!isEnabled) return;
        return trackPhoneCall(phoneNumber, buttonLocation);
      },
      [isEnabled]
    ),
    
    // External link tracking
    trackLink: useCallback(
      (url: string, linkText: string) => {
        if (!isEnabled) return;
        return trackExternalLink(url, linkText);
      },
      [isEnabled]
    ),
  };
}
