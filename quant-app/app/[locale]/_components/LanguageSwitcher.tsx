'use client'
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import useComponentVisible from "@/lib/utils/useComponentVisible";

const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => {
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
      <span ref={toggleElement} className={cn('visible p-[1px] text-black small:text-white', { 'invisible pointer-events-none': isMobile && isComponentVisible })}>{currentLocale.toUpperCase()}</span>
      {isComponentVisible && <ul ref={ref as React.RefObject<HTMLUListElement>} className={cn('absolute bg-black', {'translate-y-[-27px]': isMobile})}>
        {locales.map((locale) => (
          <li
            key={locale}
            onClick={() => locale === currentLocale ? '' : handleChangeLanguage(locale)}
            className={cn('px-[1px]', { 'text-[var(--purple)]': locale === currentLocale })}
          >
            {locale.toUpperCase()}
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default LanguageSwitcher;