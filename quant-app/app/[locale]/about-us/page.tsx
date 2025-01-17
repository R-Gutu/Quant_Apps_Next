
import NextProject from "@/app/[locale]/_sections/NextProject";
import TimeLine from "./_components/TimeLine";
import About from "./_components/About";

const AboutUs = async () => {

  return (
    <>
      <About/>
      <TimeLine/>
      <NextProject />
    </>
  );
};

export default AboutUs;
