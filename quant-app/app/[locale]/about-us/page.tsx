
import NextProject from "@/app/[locale]/_sections/NextProject";
import TimeLine from "./_components/TimeLine";
import About from "./_components/About";

const Page = async () => {
  return (
    <>
      <About/>
      <TimeLine/>
      <NextProject />
    </>
  );
};

export default Page;
