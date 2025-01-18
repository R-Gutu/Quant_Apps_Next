import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Hand3d from "@/src/assets/icons/hand3d.svg";

const NextProject = async () => {
  const t = await getTranslations("next-project");

  return (
    <div className="mt-[10px] overflow-hidden relative flex justify-center py-[100px] px-[50px] font-clash">
      <div className="w-10/12 bg-[#515DEF] rounded-[24px] h-[459px] flex items-center justify-start px-[50px] pb-[50px]
        max-lg:h-[550px] max-lg:pb-[30px] max-lg:px-[20px] max-lg:text-center">
        
        <div className="ml-[100px] flex flex-col gap-[20px] w-1/2
          max-[900px]:ml-0 max-[900px]:items-center max-[900px]:ml-[20px]">
          
          <h1 className="font-clash text-white font-bold text-[40px] leading-[36px] text-start
          max-[1000px]:mt-[30px] max-[900px]:text-[32px] max-[900px]:leading-[32px]
            max-[650px]:mt-[60px] max-[650px]:text-[24px] max-[650px]:leading-[28px] max-[900px]:text-center"
          >
            {t("ExcitedToWorkTogether")}
          </h1>

          <p className="font-clash text-white opacity-75 text-[18px] leading-[30px] text-start
          max-[1000px]:text-[16px] max-[1000px]:leading-[24px]
            max-[650px]:text-[14px] max-[650px]:leading-[18px] max-[900px]:text-center"
          >
            {t("LetsBringIdeasToLife")}
          </p>

          <Link
            className="w-[100px] flex justify-center items-center h-11 rounded-[5px] bg-white hover:bg-white"
            href="/talk-modal"
          >
            <span className="text-black w-fit font-semibold text-[18px] no-underline">
              {t("LetsTalk")}
            </span>
          </Link>
        </div>

        <div className="absolute top-0 right-[0%] w-[600px] h-auto
          max-[1324px]:w-[500px] max-[1324px]:top-[0%] max-[1324px]:right-[0%]
          max-[1100px]:w-[400px]
          max-[900px]:top-[30px] max-[900px]:right-[20%] max-[900px]:translate-x-1/2 max-[900px]:w-[330px]">
          <Image
            src={Hand3d}
            alt="Hand"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NextProject;