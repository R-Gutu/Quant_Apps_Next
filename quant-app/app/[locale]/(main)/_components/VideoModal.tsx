"use client";

import { Modal } from "@mui/material";
import { getIntroByLanguage } from "@/lib/utils/languageUtils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const VideoModal = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const currentLocale = useLocale();  // ✅ Now inside a Client Component
    const intro = getIntroByLanguage(currentLocale);
    const t = useTranslations("video");

    function handleOnClose() {
        setIsOpen(false);
    }

    return (
        <Modal
            open={true}
            onClose={handleOnClose}
            className="px-[10%] max-[1000px]:px-[20px] max-[700px]:px-[0px] flex justify-center items-center no-doc-scroll"
        >
            <div className="bg-white p-[40px] max-[700px]:p-[20px] max-[700px]:pt-[40px] rounded-[15px] relative">
                <Image
                    src="/images/icons/cross.svg"
                    alt="close cross"
                    width={70}
                    height={70}
                    className="absolute top-[-20px] max-[700px]:top-[-30px] right-0 cursor-pointer"
                    onClick={handleOnClose}
                />
                <video width="100%" controls key={intro} autoPlay preload="none">
                    <source src={intro} type="video/mp4" />
                    {t("notSupported")}
                </video>
            </div>
        </Modal>
    );
};

export default VideoModal;
