"use client";

import { Modal } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FormAlert = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const t = useTranslations("formAlert");

    function handleOnClose() {
        setIsOpen(false)
    }

    return (
        <Modal
            open={true}
            onClose={handleOnClose}
            className="px-[10%] max-[1000px]:px-[20px] max-[700px]:px-[0px] flex justify-center items-center no-doc-scroll"
        >
            <div className="bg-white p-[40px] max-[700px]:p-[20px] max-[700px]:pt-[40px] rounded-[15px] relative flex flex-col justify-center items-center">
                <Image
                    src="/images/icons/cross.svg"
                    alt="close cross"
                    width={70}
                    height={70}
                    className="absolute top-[-20px] max-[700px]:top-[-30px] right-0 cursor-pointer"
                    onClick={handleOnClose}
                />
                <Image src="/images/icons/logo_no_text.svg" alt="logo" width={106} height={106} className="pb-[24px]" />
                <p className="font-semibold text-[24px] pb-[40px] text-center">{t("success")}</p>
                <button onClick={handleOnClose} className="bg-[linear-gradient(90deg,_#8D139B_-111.43%,_#841BA1_-78.76%,_#6D32B1_-28.79%,_#4958CC_34.63%,_#2979E4_80.76%)] w-[70%] px-[20px] py-[14px] rounded-[8px] text-white font-medium text-[16px]">Ok</button>
            </div>
        </Modal>
    );
};

export default FormAlert;
