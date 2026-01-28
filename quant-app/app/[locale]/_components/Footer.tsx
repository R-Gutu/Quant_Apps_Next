import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import SocialLinksType from "@/lib/types/SocialLinksType";

const Footer = async () => {
  const tToolbar = await getTranslations("app-toolbar");
  const tFooter = await getTranslations("footer");

  const socialLinks: SocialLinksType[] = [
    { href: "https://www.instagram.com/quantapps_/", icon: "/images/icons/instagram-logo.svg", alt: "Instagram" },
    { href: "https://www.linkedin.com/company/quant-apps", icon: "/images/icons/linked-in-logo.svg", alt: "LinkedIn" },
    { href: "https://t.me/quantapps", icon: "/images/icons/telegram-logo.svg", alt: "Telegram" },
  ];

  const pages = ['services', 'projects', 'process', 'about-us', 'careers', 'terms-of-use', 'privacy-policy'];

  const contactInfo = [
    { icon: '/images/icons/email.svg', text: 'support@quant-apps.com', href: 'mailto:support@quant-apps.com' },
    { icon: '/images/icons/phone.svg', text: '+40 756 119 304', href: 'tel:+40756119304' },
    { icon: '/images/icons/geolocation.svg', text: 'România', href: null },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030918] via-[#051139]/80 to-transparent pointer-events-none" />
      
      <div className="relative px-[40px] py-[60px] medium:px-[80px] big:px-[162px]">
        <div className="w-full font-inter flex flex-col gap-[50px]">
          
          {/* Top section */}
          <div className="w-full flex items-center max-medium:flex-col justify-between gap-[30px]">
            
            {/* Logo */}
            <Link href="/" className="group">
              <Image 
                src="/images/icons/Logo.svg" 
                alt="Quant Apps Logo" 
                width={200} 
                height={60}
                className="transition-all duration-300 group-hover:brightness-125"
              />
            </Link>
            
            {/* Navigation */}
            <nav className="flex flex-wrap gap-x-[24px] gap-y-[12px] max-medium:my-[20px] items-center justify-center">
              <hr className="hidden w-full border-[#6A65FF]/20 my-3 max-medium:block" />
              {pages.map((page) => (
                <Link 
                  key={page} 
                  href={`/${page}`}
                  className="text-[#B8BCC8] text-[16px] font-medium text-nowrap transition-all duration-200 hover:text-white hover:translate-y-[-2px]"
                >
                  {tToolbar(page)}
                </Link>
              ))}
            </nav>

            {/* Social links */}
            <div className="glass rounded-[16px] p-[20px] flex flex-col items-center gap-[14px]">
              <p className="text-[#B8BCC8] text-[13px] font-medium tracking-wide uppercase">
                {tFooter("StayConnected")}
              </p>
              <div className="flex gap-[12px]">
                {socialLinks.map(({ href, icon, alt }) => (
                  <Link
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-[52px] h-[52px] rounded-[12px] bg-gradient-to-b from-[#6A65FF]/80 to-[#6A65FF]/20 border border-[#6A65FF]/40 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(106,101,255,0.4)]"
                  >
                    <Image
                      width={22}
                      height={22}
                      src={icon}
                      alt={alt}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#6A65FF]/30 to-transparent" />

          {/* Bottom section */}
          <div className="w-full flex flex-col medium:flex-row items-center justify-between gap-[30px]">
            
            {/* Contact info */}
            <div className="flex flex-wrap items-center justify-center gap-[20px] medium:gap-[40px]">
              {contactInfo.map(({ icon, text, href }) => (
                <div key={text} className="group">
                  {href ? (
                    <a 
                      href={href}
                      className="flex items-center gap-[10px] text-[#B8BCC8] text-[15px] transition-colors duration-200 hover:text-white"
                    >
                      <div className="w-[36px] h-[36px] rounded-[8px] bg-[#6A65FF]/10 flex items-center justify-center transition-all duration-200 group-hover:bg-[#6A65FF]/20">
                        <Image width={18} height={18} src={icon} alt="" />
                      </div>
                      <span>{text}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-[10px] text-[#B8BCC8] text-[15px]">
                      <div className="w-[36px] h-[36px] rounded-[8px] bg-[#6A65FF]/10 flex items-center justify-center">
                        <Image width={18} height={18} src={icon} alt="" />
                      </div>
                      <span>{text}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Copyright */}
            <p className="text-[13px] text-[#6B7280]">
              © {new Date().getFullYear()} Quant-Applications. {tFooter("AllRightsReserved")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;