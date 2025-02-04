import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Blur from "@/components/Blur";

const NextProject = async () => {
  const t = await getTranslations("next-project");

  return (
    <div className="mt-[10px] overflow-hidden relative flex items-center justify-center py-[130px] px-[50px] font-clash">
      <div className="w-5/6 bg-[#515DEF] rounded-[24px] flex items-center justify-start max-[600px]:justify-center py-[80px] px-[100px] max-[1200px]:py-[50px] 
      max-[600px]:py-[30px] max-[600px]:px-[30px]
          max-lg:px-[20px] max-lg:text-center max-[600px]:pt-[210px]">

        <div className="flex flex-col gap-[20px] w-3/5
          max-[900px]:items-center max-[600px]:w-[200px]">

          <h3 className="font-clash text-white font-bold text-4xl text-start
          max-[1000px]:mt-[30px] max-[900px]:text-[32px] max-[900px]:leading-[32px]
            max-[650px]:mt-[60px] max-[650px]:text-[24px] max-[650px]:leading-[26px] max-[900px]:text-center]
           "
          >
            {t("ExcitedToWorkTogether")}
          </h3>

          <h2 className="font-clash text-white opacity-75 text-[16px] leading-[30px] text-start
          max-[1000px]:text-[16px] max-[1000px]:leading-[24px]
            max-[650px]:text-[16px] max-[650px]:leading-[20px] max-[900px]:text-center
            max-[500px]:w-[200px]"
          >
            {t("LetsBringIdeasToLife")}
          </h2>

          <Link
            href="/talk-modal"
            legacyBehavior
          >
            <a className="w-fit p-4 flex justify-center items-center h-11 rounded-[5px] bg-white hover:bg-white max-w-[170px]">
              <span className="w-fit text-nowrap text-center text-black font-semibold text-[18px] no-underline max-[600px]:text-[14px]">
                {t("LetsTalk")}
              </span>
            </a>
          </Link>
        </div>

        <div className="absolute top-[8%] right-[0%] w-[700px] h-auto
          max-[1324px]:w-[500px] max-[1324px]:top-[20%] max-[1324px]:right-[0%]
          max-[900px]:w-[400px]
          max-[900px]:top-[30px] max-[900px]:right-[20%] max-[900px]:translate-x-1/2 max-[600px]:top-[-2px] max-[600px]:right-[100px]">
          <Image
            priority
            width={500}
            height={0}
            src="/icons/hand3d.svg"
            alt="Hand"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
        <Blur
          color='#9C08FF'
          right="0%"
          bottom="0px"
          filter="blur(100px)"
          className=" w-[530px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Image src="/icons/Star.svg" width={50} height={0} alt="Star" className="w-auto h-auto top-[40px] right-[50px] why-ios__bg-img max-[900px]:hidden" />
      </div>

    </div>
  );
};

export default NextProject;