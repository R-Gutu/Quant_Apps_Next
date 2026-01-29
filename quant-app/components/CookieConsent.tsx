'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import * as m from 'motion/react-m';
import { AnimatePresence } from 'motion/react';
import { Cookie, X, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import Cookies from 'js-cookie';
import Link from 'next/link';

const CONSENT_COOKIE_NAME = 'quant_cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;

export type ConsentSettings = {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const t = useTranslations('cookies');
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Check if consent was already given
    const existingConsent = Cookies.get(CONSENT_COOKIE_NAME);
    if (!existingConsent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (consent: ConsentSettings) => {
    Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consent), {
      expires: CONSENT_EXPIRY_DAYS,
      sameSite: 'lax',
    });
    
    // Dispatch custom event for analytics to listen
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { 
      detail: consent 
    }));
    
    setVisible(false);
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setSettings(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptSelected = () => {
    saveConsent(settings);
  };

  const rejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    setSettings(onlyNecessary);
    saveConsent(onlyNecessary);
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[99999] p-4 md:p-6"
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-gradient-to-br from-[#0a1040] via-[#0d1654] to-[#0a0f35] rounded-[20px] p-6 md:p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
              {/* Close button */}
              <button
                onClick={rejectAll}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#6A65FF] to-[#4A5DE5] flex items-center justify-center">
                  <Cookie size={24} className="text-white" />
                </div>
                <div className="flex-1 pr-8">
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                    {t('title')}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    {t('description')}
                  </p>
                </div>
              </div>

              {/* Details toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-[#6DB9FF] text-sm font-medium mb-4 hover:text-[#8FCBFF] transition-colors"
              >
                <Shield size={16} />
                {t('customizeSettings')}
                {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Cookie settings */}
              <AnimatePresence>
                {showDetails && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-3 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                      {/* Necessary cookies */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium text-sm">{t('necessary.title')}</p>
                          <p className="text-white/50 text-xs">{t('necessary.description')}</p>
                        </div>
                        <div className="px-3 py-1 bg-[#6A65FF]/20 rounded-full text-[#6DB9FF] text-xs font-medium">
                          {t('alwaysOn')}
                        </div>
                      </div>

                      {/* Analytics cookies */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium text-sm">{t('analytics.title')}</p>
                          <p className="text-white/50 text-xs">{t('analytics.description')}</p>
                        </div>
                        <button
                          onClick={() => setSettings(s => ({ ...s, analytics: !s.analytics }))}
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            settings.analytics ? 'bg-[#6A65FF]' : 'bg-white/20'
                          }`}
                        >
                          <m.div
                            animate={{ x: settings.analytics ? 24 : 2 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
                          />
                        </button>
                      </div>

                      {/* Marketing cookies */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium text-sm">{t('marketing.title')}</p>
                          <p className="text-white/50 text-xs">{t('marketing.description')}</p>
                        </div>
                        <button
                          onClick={() => setSettings(s => ({ ...s, marketing: !s.marketing }))}
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            settings.marketing ? 'bg-[#6A65FF]' : 'bg-white/20'
                          }`}
                        >
                          <m.div
                            animate={{ x: settings.marketing ? 24 : 2 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
                          />
                        </button>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <m.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#6A65FF] to-[#4A5DE5] text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(106,101,255,0.4)] transition-shadow"
                >
                  {t('acceptAll')}
                </m.button>
                
                {showDetails && (
                  <m.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={acceptSelected}
                    className="flex-1 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {t('savePreferences')}
                  </m.button>
                )}
                
                <m.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={rejectAll}
                  className="px-6 py-3 text-white/60 font-medium rounded-xl hover:text-white hover:bg-white/5 transition-colors"
                >
                  {t('rejectAll')}
                </m.button>
              </div>

              {/* Privacy link */}
              <p className="mt-4 text-center text-white/40 text-xs">
                {t('privacyNote')}{' '}
                <Link href="/privacy-policy" className="text-[#6DB9FF] hover:underline">
                  {t('privacyLink')}
                </Link>
              </p>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

// Helper function to get current consent
export function getConsentSettings(): ConsentSettings | null {
  if (typeof window === 'undefined') return null;
  const consent = Cookies.get(CONSENT_COOKIE_NAME);
  if (!consent) return null;
  try {
    return JSON.parse(consent);
  } catch {
    return null;
  }
}
