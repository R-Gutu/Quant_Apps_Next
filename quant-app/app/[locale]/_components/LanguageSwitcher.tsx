'use client'
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import useComponentVisible from "@/lib/utils/useComponentVisible";
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
];

const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChangeLanguage = (value: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${value}`);
    router.push(newPathname);
    setVisible(false);
  };

  const {
    ref,
    toggleElement,
    isComponentVisible,
    setIsComponentVisible: setVisible
  } = useComponentVisible(false);

  const currentLang = languages.find(l => l.code === currentLocale) || languages[0];

  const handleToggle = () => {
    setVisible(!isComponentVisible);
  };

  return (
    <div className="relative select-none z-[99999]">
      {/* Trigger button */}
      <button
        ref={toggleElement as React.RefObject<HTMLButtonElement>}
        onClick={handleToggle}
        className={cn(
          "flex items-center gap-[8px] px-[14px] py-[8px] rounded-[10px] transition-all duration-200 active:scale-95",
          mobile 
            ? "bg-[#6A65FF]/10 border border-[#6A65FF]/30 text-gray-800"
            : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
          isComponentVisible && !mobile && "bg-white/10 border-white/20"
        )}
      >
        <span className="text-[18px]">{currentLang.flag}</span>
        <span className={cn(
          "font-medium text-[15px]",
          mobile ? "text-gray-800" : "text-white"
        )}>
          {currentLang.code.toUpperCase()}
        </span>
        <m.div
          animate={{ rotate: isComponentVisible ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} className={mobile ? "text-gray-600" : "text-white/60"} />
        </m.div>
      </button>
      
      {/* Dropdown */}
      <AnimatePresence>
        {isComponentVisible && (
          <m.div 
            ref={ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute mt-[8px] min-w-[160px] rounded-[14px] overflow-hidden shadow-xl",
              mobile 
                ? "bg-white border border-gray-200 left-1/2 -translate-x-1/2 z-[100000]"
                : "bg-[#1a1f4e]/95 backdrop-blur-xl border border-white/10 right-0 z-50"
            )}
          >
            {/* Dropdown header */}
            <div className={cn(
              "px-[14px] py-[10px] border-b",
              mobile 
                ? "border-gray-100 bg-gray-50"
                : "border-white/5 bg-white/5"
            )}>
              <p className={cn(
                "text-[11px] font-semibold uppercase tracking-wider",
                mobile ? "text-gray-400" : "text-white/40"
              )}>
                Language
              </p>
            </div>

            {/* Language options */}
            <div className="py-[6px]">
              {languages.map((lang, index) => {
                const isActive = lang.code === currentLocale;
                return (
                  <m.button
                    key={lang.code}
                    onClick={() => handleChangeLanguage(lang.code)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className={cn(
                      "w-full flex items-center gap-[12px] px-[14px] py-[10px] transition-colors duration-150",
                      mobile 
                        ? isActive 
                          ? "bg-[#6A65FF]/10" 
                          : "hover:bg-gray-50"
                        : isActive 
                          ? "bg-[#6A65FF]/20" 
                          : "hover:bg-white/5"
                    )}
                  >
                    <span className="text-[20px]">{lang.flag}</span>
                    <div className="flex-1 text-left">
                      <p className={cn(
                        "font-medium text-[14px]",
                        mobile 
                          ? isActive ? "text-[#6A65FF]" : "text-gray-700"
                          : isActive ? "text-[#6DB9FF]" : "text-white/90"
                      )}>
                        {lang.name}
                      </p>
                      <p className={cn(
                        "text-[11px]",
                        mobile ? "text-gray-400" : "text-white/40"
                      )}>
                        {lang.code.toUpperCase()}
                      </p>
                    </div>
                    {isActive && (
                      <m.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cn(
                          "w-[20px] h-[20px] rounded-full flex items-center justify-center",
                          mobile 
                            ? "bg-[#6A65FF]" 
                            : "bg-gradient-to-r from-[#6A65FF] to-[#4A5DE5]"
                        )}
                      >
                        <Check size={12} className="text-white" strokeWidth={3} />
                      </m.div>
                    )}
                  </m.button>
                );
              })}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
