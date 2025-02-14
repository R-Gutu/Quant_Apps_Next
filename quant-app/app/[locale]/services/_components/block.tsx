import Image from "next/image";

export default function Block({ text, src, alt, className }: { text: string; src: string; alt: string; className?: string }) {
    return (
      <div className={`flex flex-col items-start gap-5 p-[40px] h-full ${className}`}>
        <div className="w-[64px] h-[64px] rounded-[12px] p-[16px] border border-[#7D5AE680] shadow-[0px_4px_8px_0px_#4A5DE580] bg-gradient-to-b from-[#6A65FF] to-[rgba(36,36,36,0)] flex items-center justify-center">
          <Image width={24} height={24} src={src} alt={alt} />
        </div>
        <p className="font-medium text-[16px] leading-[30px] tracking-[-0.006em] text-[#E6E6E6] text-start flex-1">{text}</p>
      </div>
    );
  }
  
