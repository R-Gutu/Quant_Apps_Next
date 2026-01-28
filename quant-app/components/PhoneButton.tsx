'use client';

import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";

export default function PhoneButton() {
    const [open, setOpen] = useState(false);
    const [isAppleDevice, setIsAppleDevice] = useState(false);

    useEffect(() => {
        // Check if device is macOS or iOS (supports flag emojis)
        const ua = navigator.userAgent;
        const isApple = /Mac|iPhone|iPad|iPod/.test(ua) && !/Windows/.test(ua);
        setIsAppleDevice(isApple);
    }, []);

    const contactOptions = [
        {
            href: "tel:+37378872958",
            icon: Phone,
            label: "Call",
            flag: "🇬🇧",
            extraFlags: "🇷🇺🇲🇩🇺🇦",
            countryCode: "EN/RU/MD/UA",
            gradient: "from-[#836FFF] to-[#4A5DE5]",
        },
        {
            href: "tel:+40750488145",
            icon: Phone,
            label: "Call",
            flag: "🇷🇴",
            countryCode: "RO",
            gradient: "from-[#002B7F] to-[#FCD116]",
        },
        {
            href: "https://wa.me/37378872958",
            icon: FaWhatsapp,
            label: "WhatsApp",
            gradient: "from-green-400 to-green-600",
            external: true,
        },
        {
            href: "https://t.me/quantapps",
            icon: FaTelegram,
            label: "Telegram",
            gradient: "from-blue-400 to-blue-600",
            external: true,
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Dropdown menu */}
            <AnimatePresence>
                {open && (
                    <m.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="absolute bottom-20 right-0 flex flex-col gap-3"
                    >
                        {contactOptions.map((option, index) => (
                            <m.a
                                key={`${option.label}-${index}`}
                                href={option.href}
                                target={option.external ? "_blank" : undefined}
                                rel={option.external ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, x: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${option.gradient} text-white shadow-lg hover:shadow-xl transition-shadow duration-200`}
                            >
                                {option.flag && isAppleDevice ? (
                                    // Apple devices: show emoji flags
                                    <span className="text-[18px] flex-shrink-0">{option.flag}</span>
                                ) : option.countryCode ? (
                                    // Other devices: show text codes
                                    <span className="text-[11px] font-bold opacity-90 bg-white/20 px-2 py-0.5 rounded">{option.countryCode}</span>
                                ) : (
                                    <option.icon size={20} className="flex-shrink-0" />
                                )}
                                <span className="text-sm font-semibold whitespace-nowrap">{option.label}</span>
                                {option.extraFlags && isAppleDevice && (
                                    <span className="text-[14px] opacity-80">{option.extraFlags}</span>
                                )}
                            </m.a>
                        ))}
                    </m.div>
                )}
            </AnimatePresence>

            {/* Floating button */}
            <m.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: open ? 135 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#836FFF] to-[#4A5DE5] text-white rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(106,101,255,0.5)] transition-shadow duration-300"
                aria-label="Contact options"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <m.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X size={24} />
                        </m.div>
                    ) : (
                        <m.div
                            key="phone"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Phone size={24} />
                        </m.div>
                    )}
                </AnimatePresence>
                
                {/* Pulse ring */}
                {!open && (
                    <span className="absolute inset-0 rounded-full bg-[#836FFF] animate-ping opacity-20" />
                )}
            </m.button>
        </div>
    );
}
