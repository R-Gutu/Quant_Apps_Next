'use client'
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import useComponentVisible from "@/lib/utils/useComponentVisible";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChangeLanguage = (value: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${value}`);
    router.push(newPathname);
  };

  const locales = ['en', 'ru', 'ro'];

  const {
    ref,
    toggleElement,
    isComponentVisible
  } = useComponentVisible(false);

  return (
    <div className="text-[18px] text-white cursor-pointer relative select-none">
      <motion.span 
        ref={toggleElement} 
        className={cn('visible p-[1px] text-black small:text-white', { 'invisible pointer-events-none': mobile && isComponentVisible })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {currentLocale.toUpperCase()}
      </motion.span>
      
      <AnimatePresence>
        {isComponentVisible && (
          <motion.ul 
            ref={ref as React.RefObject<HTMLUListElement>} 
            className={cn('absolute bg-black', {'translate-y-[-27px]': mobile})}
            initial={{ opacity: 0, y: mobile ? -10 : 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: mobile ? -10 : 10, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {locales.map((locale, index) => (
              <motion.li
                key={locale}
                onClick={() => locale === currentLocale ? '' : handleChangeLanguage(locale)}
                className={cn('px-[1px]', { 'text-[var(--purple)]': locale === currentLocale })}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: locale === currentLocale ? 'var(--purple)' : 'var(--purple-light)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {locale.toUpperCase()}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;