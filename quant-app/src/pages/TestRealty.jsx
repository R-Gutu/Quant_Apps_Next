import { useEffect } from "react";
import Footer from "../components/Footer";

const TestRealty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
      <iframe width="1000" height="588" src="https://my.matterport.com/show/?m=E4uHpDyRfp8" frameborder="0" allowfullscreen allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"></iframe>
    </div>
     <Footer />
    </>
  );
};

export default TestRealty;
