
import NextProject from "@/app/[locale]/_sections/NextProject";
import TimeLine from "./_components/TimeLine";
import About from "./_components/About";

const Page = async () => {
  return (
    <div className="flex flex-col">
      <About/>
      <TimeLine/>
      <NextProject />
    </div>
  );
};

export default Page;
