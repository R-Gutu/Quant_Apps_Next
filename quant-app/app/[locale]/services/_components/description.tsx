import Block from "./block";

export default function Description({ title, blocks, className }: { title: string; blocks: any; className?: string }) {
    return (
      <div>
        <h2 className="font-medium text-[28px] leading-[33.89px] tracking-[0] text-[#98989A] ml-10 my-10">{title}</h2>
        
        <div className={`grid grid-cols-2 mui-md:grid-cols-4 ${className}`}>
        <Block
            text={blocks[0].text}
            src={blocks[0].src}
            alt={blocks[0].alt}
            className="border-r-[1px] border-[#6A65FF80] max-mui-md:border-b-[1px]"
            />
            <Block
            text={blocks[1].text}
            src={blocks[1].src}
            alt={blocks[1].alt}
            className="mui-md:border-r-[1px] border-[#6A65FF80] max-mui-md:border-b-[1px]"
            />
            <Block
            text={blocks[2].text}
            src={blocks[2].src}
            alt={blocks[2].alt}
            className="border-r-[1px] border-[#6A65FF80]"
            />
            <Block
            text={blocks[3].text}
            src={blocks[3].src}
            alt={blocks[3].alt}
            />
        </div>
      </div>
    );
  }
  
