import Image from "next/image"
export default function Banner({ header, subHeader, src, className }: { header: string, subHeader: string, src: string, className?: string }) {
    return (
        <div className={`relative overflow-hidden w-full px-[300px] py-[120px] rounded-[35px] bg-[#141a76] text-white flex flex-col items-center justify-center ${className}`}>
            <Image
                className="z-0 absolute w-full h-full object-fill object-left mix-blend-overlay"
                sizes="100vw"
                width={1500}
                height={0}
                src={src}
                alt="banner background"
            />
            <h2 className="font-semibold text-[48px] z-10 text-center mb-[14px]">{header}</h2>
            <p className="font-normal text-[18px] z-10 text-center">{subHeader}</p>
        </div>
    )
}