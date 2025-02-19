
export default function Header({title, text, button, className}: {title: string, text: string, button: string, className?: string}) {
  return (
    <div className="flex flex-col gap-10 mt-[90px]">
        <div className="flex flex-col gap-4 pl-10">
            <h1 className="font-semibold text-[48px] max-smallest:text-[26px] max-[400px]:text-[24px] max-mui-md:text-[32px] text-[#FFFFFF] max-smallest:leading-10">{title}</h1>
            <p className="font-normal text-[18px] max-smallest:text-[14px] text-[#E6E6E6] max-mui-md:text-[16px] opacity-75">{text}</p>
            <div className="mt-5 bg-[#4A6ED1] w-fit rounded-[8px] p-[12px_14px] gap-[10px] font-normal text-[18px] max-smallest:text-[14px] max-mui-md:text-[16px] text-[#FFFFFF]">{button}</div>
        </div>
        <hr className="w-full border-[1px] border-[#6A65FF80]"/>
  </div>
  )
}
