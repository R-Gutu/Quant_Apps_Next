import Image from "next/image"
import { Link } from "@/i18n/routing"
export default function Banner({ header, subHeader, src, className, button, icon }: { header: string, subHeader: string, src: string, className?: string, button?: string, icon?: string }) {
    return (
        <div className={`relative overflow-hidden w-full px-[16px] min-[600px]:px-[100px] min-[1000px]:px-[250px] py-[50px] min-[600px]:py-[120px] medium:px-[300px] rounded-[35px] bg-[#141a76] text-white flex flex-col items-center justify-center ${className}`}>
            <Image
                className="z-0 absolute w-full h-full object-fill object-left mix-blend-overlay"
                sizes="100vw"
                width={1500}
                height={0}
                src={src}
                alt="banner background"
            />
            {icon && <Image className="mb-[50px]" src={icon ?? ''} alt="icon" width={80} height={80} />}
            <h2 className="font-semibold text-[28px] min-[600px]:text-[38px] medium:text-[48px] z-10 text-center min-[600px]:mb-[14px]">{header}</h2>
            <p className="font-normal text-[14px] min-[600px]:text-[16px] medium:text-[18px] z-10 text-center">{subHeader}</p>
            {button && <Link href="/talk-modal"><div className="btn z-10 py-[18px] px-[34px] rounded-[8px] mt-[50px] bg-[linear-gradient(89.13deg,_#836FFF_0%,_#4A5DE5_100%)]">{button}</div></Link>}
        </div>
    )
}