'use client'
import { useRouter } from "@/i18n/routing";
import { Modal } from "@mui/material";
import { getIntroByLanguage } from "@/lib/utils/languageUtils";
import { useLocale, useTranslations } from "next-intl";

const Page = () => {
    const router = useRouter();
    const currentLocale = useLocale();
    const intro = getIntroByLanguage(currentLocale);
    const t = useTranslations('main');
    return (
        <Modal
            open={true}
            onClose={() => router.back()}
            id="video-popup"
            className="px-10 py-0"
            disableScrollLock={ true }
        >
            <div className="modal-content">
                <span className="close-modal" onClick={() => router.back()} />

                <video
                    id="localVideo"
                    width="100%"
                    controls
                    key={intro}
                    autoPlay
                >
                    <source src={intro} type="video/mp4" />
                    {t("BrowserDoesNotSupportVideo")}
                </video>
            </div>
        </Modal>
    );
};

export default Page;
