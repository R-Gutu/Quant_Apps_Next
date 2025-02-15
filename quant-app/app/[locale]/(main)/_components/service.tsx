import Image from "next/image"
export default function Service({ src, title, text, className }: { src: string, title: string, text: string, className?: string }) {
    return (
        <div className={`flex flex-col justify-between text-white p-[50px]  ${className}`}>
            <div>
                <div className="mb-[40px] border-[1px] border-solid border-[#7D5AE680] shadow-[0px_4px_8px_0px_#4A5DE580] w-[88px] h-[88px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(180deg,_#6A65FF_0%,_rgba(36,_36,_36,_0)_100%)]">
                    <Image src={src} alt={title} width={40} height={40} />
                </div>
                <h3 className="font-semibold text-[30px] max-[1600px]:text-[23px] mb-[20px]">{title}</h3>
                <p className="font-normal text-[16px] mb-[34px]">{text}</p>
            </div>
            <div className="w-full h-[60px] text-[18px] font-medium flex justify-center items-center rounded-[8px] bg-[linear-gradient(89.13deg,_#836FFF_0.18%,_#4A5DE5_99.86%)]">Learn More</div>
        </div>
    )
}