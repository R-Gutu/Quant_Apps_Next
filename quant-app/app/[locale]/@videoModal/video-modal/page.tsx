'use client'
import { useRouter } from "@/i18n/routing";
import { Modal } from "@mui/material";
import { getIntroByLanguage } from "@/lib/utils/languageUtils";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

const Page = () => {
    const router = useRouter();
    const currentLocale = useLocale();
    const intro = getIntroByLanguage(currentLocale);
    const t = useTranslations("video");
    
      useEffect(() => {
        document.querySelector('body')?.classList.add('overflow-hidden');
      }, [])
    
      function handleOnClose() {
        console.log('handleOnClose');
        document.querySelector('body')?.classList.remove('overflow-hidden');
        router.back();
      }

    return (
        <Modal
            open={true}
            onClose={handleOnClose}
            className="px-[10%] max-[1000px]:px-[20px] max-[700px]:px-[0px] flex justify-center items-center"
        >
            <div className="bg-white p-[40px] max-[700px]:p-[20px] max-[700px]:pt-[40px]  rounded-[15px] relative">
                <Image src="/images/icons/cross.svg" alt="close cross" width={70} height={70} className="absolute top-[-20px] max-[700px]:top-[-30px] right-0 cursor-pointer" onClick={handleOnClose}/>
                <video
                    width="100%"
                    controls
                    key={intro}
                    autoPlay
                >
                    <source src={intro} type="video/mp4" />
                    {t("notSupported")}
                </video>
            </div>
        </Modal>
    );
};

export default Page;
