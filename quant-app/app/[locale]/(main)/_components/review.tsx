import Image from "next/image"
export default function Review({ content, src, name, description, imgHeight=70, className }: { content: string, src: string, name: string, description: string, imgHeight?: number, className?: string }) {
    return (
        <div className={`px-[80px] pt-[100px] flex flex-col justify-between ${className}`}>
            <p className="font-medium italic text-[25px] text-[#6DB9FF]">{content}</p>
            <div className="mt-[5xp] flex items-center justify-between border-[1px] border-solid border-[#262626] p-[20px] rounded-[8px] bg-[#24242433] text-white">
                <div className="flex gap-[18px] items-center">
                    <Image src={src} alt={name} width={70} height={imgHeight} className={`w-auto h-[${imgHeight}px]`} />
                    <div>
                        <h4 className="font-medium text-[20px]">{name}</h4>
                        <p className="font-normal text-[18px]">{description}</p>
                    </div>
                </div>
                <div className="bg-[linear-gradient(89.13deg,_#836FFF_0.18%,_#4A5DE5_99.86%)] py-[18px] px-[20px] rounded-[8px] text-[18px] font-medium">
                    Open Website
                </div>
            </div>
        </div>
    )
}