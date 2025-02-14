import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import SocialLinksType from "@/lib/types/SocialLinksType";

const Footer = async () => {
  const tToolbar = await getTranslations("app-toolbar");
  const tFooter = await getTranslations("footer");

  const socialLinks: SocialLinksType[] = [
    { href: "https://www.facebook.com/profile.php?id=61571073299478", icon: "/icons/footer-facebook.svg", alt: "Facebook" },
    { href: "https://www.instagram.com/quantapps_/", icon: "/icons/footer-instagram.svg", alt: "Instagram" },
    { href: "https://www.linkedin.com/company/quant-apps", icon: "/icons/linked-in.svg", alt: "LinkedIn" },
    { href: "https://www.tiktok.com/@quantapps", icon: "/icons/tik-tok.svg", alt: "TikTok" },
    { href: "https://t.me/quantapps", icon: "/icons/Telegram.svg", alt: "Telegram" },
    { href: "https://wa.me/37369882331", icon: "/icons/whats-app.svg", alt: "WhatsApp" }
  ];

  const pages = ['services', 'projects', 'process', 'about-us', 'careers', 'terms-of-use', 'privacy-policy']

  return (
    <div className="p-[60px] bg-[#0000001a]">
      <div className=" w-full font-inter flex flex-col flex-wrap gap-[50px]">
        <div className="w-full flex items-center max-small:flex-col justify-between ">
          <Link href="/" legacyBehavior>
            <a className="self-center min-w-[200px] !font-inter">
              <Image src="/icons/logo.svg" alt="Logo" width={200} height={60} />
            </a>
          </Link>
          <div className=" flex flex-wrap gap-x-[30px] max-small:my-[30px] min-w-[330px] max-w-[500px] items-center justify-center mx-2">
            <hr className=" hidden w-full border-[#6A65FF1A] border-[1px] my-5 max-small:block" />
            {pages.map(e => <Link key={e} href={`/${e}`} legacyBehavior>
              <a className="text-[#E6E6E6] text-[18px] font-medium text-nowrap transition-transform duration-200 hover:translate-y-[-3px]">{tToolbar(e)}</a>
            </Link>
            )}
          </div>

          <div className="flex items-center gap-[10px] border-[1px] border-[#6A65FF1A] rounded-[12px] p-[14px] max-mui-md:flex max-mui-md:flex-col max-mui-md:px-[60px] min-w-[300px]">
            <p className="text-[#E6E6E6] text-[14px] opacity-75 font-inter">Stay Connected</p>
            <div className="flex gap-[20px] max-smallest:grid max-smallest:grid-rows-2 max-smallest:grid-cols-3">
              {socialLinks.map(({ href, icon, alt }) => (
                <div key={alt} className="flex shadow-[0px_4px_8px_0px_#4A5DE533]
            items-center no-underline border-1 bg-gradient-to-b from-[#6A65FF] to-[#24242400] border-[#6A65FF80] rounded-[8px] h-[64px] w-[64px] p-[20px] !font-inter max-mui-md:w-[58px] max-mui-md:h-[58px]">
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    legacyBehavior
                  >
                    <a>
                      <Image
                        width={24}
                        height={24}
                        src={icon}
                        alt="External Link"
                        className="max-mui-md:w-[20px]"
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-[#6A65FF1A] border-[1px] max-smallest:hidden" />

        <div className="w-full max-mui-md:flex-col flex flex-row max-smallest:flex-col justify-between">
          <div className="flex flex-wrap text-[#E6E6E6] gap-[30px] text-[16px] items-center justify-center">
            <div className="max-smallest:w-full">
              <div className="flex items-center justify-center gap-[10px]">
                <Image width={24} height={24} src='/icons/email.svg' alt="email"></Image>
                support@quant-apps.com
              </div>
              <hr className="w-full border-[#6A65FF1A] border-[1px]" />
            </div>
            <div className="max-smallest:w-full">
              <div className="flex items-center justify-center gap-[10px]">
                <Image width={24} height={24} src='/icons/phone.svg' alt="email"></Image>
                +373 69 882 331
              </div>
              <hr className="border-[#6A65FF1A] border-[1px]" />
            </div>
            <div className="max-smallest:w-full">
              <div className="flex items-center justify-center gap-[10px]">
                <Image width={24} height={24} src='/icons/geolocation.svg' alt="email"></Image>
                Republic of Moldova
              </div>
              <hr className="border-[#6A65FF1A] border-[1px]" />
            </div>
          </div>
          <div className="w-fit flex items-center justify-center text-[12px] font-normal leading-[14.52px] text-[#98989A] opacity-75 max-mui-md:w-full max-mui-md:mt-10">
            {`© ${new Date().getFullYear()} Quant-Apps. ${tFooter("AllRightsReserved")}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;