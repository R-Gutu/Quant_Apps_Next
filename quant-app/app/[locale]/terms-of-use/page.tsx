import Banner from "@/components/banner";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ElevatingBusiness from "../_components/ElevatingBusiness";

const Page = async () => {
  const t = await getTranslations("terms-of-use");

  return (
    <div className="px-[100px] max-small:px-[40px] max-smallest:px-[20px] font-inter">
        <Banner
            src="/images/banners/faqs_banner.png"
            header="Terms of Use"
            subHeader="Last updated on 5/12/2024"
        />
        <div className="flex max-mui-md:grid gap-[30px] items-center justify-center my-[50px] text-[18px] max-smallest:text-[14px] text-[#E6E6E6] max-small:text-[16px]">
          <div className="flex gap-[10px] max-mui-md:min-w-[400px] max-smallest:min-w-[0px] p-[20px] rounded-[8px] border-[1px] border-[#6A65FF80] items-center justify-center">
            <Image src="/images/icons/email.svg" width={30} height={30} alt="email"/>
            <p>support@quant-apps.com</p>
          </div>
          <div className="flex gap-[10px] p-[20px] rounded-[8px] border-[1px] border-[#6A65FF80] items-center justify-center">
            <Image src="/images/icons/phone.svg" width={30} height={30} alt="phone"/>
            <p>+373 69 882 331</p>
          </div>
          <div className="flex gap-[10px] p-[20px] rounded-[8px] border-[1px] border-[#6A65FF80] items-center justify-center">
            <Image src="/images/icons/geolocation.svg" width={30} height={30} alt="geolocation"/>
            <p>Republic of Moldova</p>
          </div>
        </div>
        <div className="text-[20px] max-mui-md:text-[18px] max-smallest:text-[16px] text-[#FFFFFF] flex flex-col gap-[20px]">
          <p className="indent-6">Welcome to Quant-Apps! Please read these Terms of Use ("Terms") carefully before using our website and services. By accessing or using Quant-Apps ("we," "our," or "us"), you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>

          <p className="indent-6"><strong>1. Acceptance of Terms</strong><br/>
          By accessing or using our website or services, you confirm that you are at least 18 years old and agree to comply with these Terms. If you are accessing on behalf of a company, you represent and warrant that you have the authority to bind the company to these Terms.</p>

          <p className="indent-6"><strong>2. Services Provided</strong><br/>
          Quant-Apps offers IT development services, including mobile app development, UI/UX design, and software solutions. Any services provided will be subject to a separate agreement outlining the scope, deliverables, and terms of the engagement.</p>

          <p className="indent-6"><strong>3. Intellectual Property</strong><br/>
          All content, trademarks, logos, and materials provided by Quant-Apps, including but not limited to designs, software, and code, are the property of Quant-Apps unless otherwise stated. You may not use, copy, reproduce, or distribute any materials without explicit written permission.</p>

          <p className="indent-6"><strong>4. User Conduct</strong><br/>
          You agree to use our website and services for lawful purposes only and will not:</p>
          <ul className="ml-10 list-disc ">
            <li className="">Engage in any activity that disrupts or damages our website or services.</li>
            <li className="">Attempt to access unauthorized areas of our website or servers.</li>
            <li className="">Use our services for illegal, fraudulent, or harmful purposes.</li>
          </ul>

          <p className="indent-6"><strong>5. Disclaimer of Warranties</strong><br/>
          Quant-Apps provides its services "as is" and "as available." While we strive for excellence, we do not guarantee that our website or services will be uninterrupted, error-free, or meet your expectations. To the fullest extent permitted by law, we disclaim all warranties, express or implied.</p>

          <p className="indent-6"><strong>6. Limitation of Liability</strong><br/>
          Quant-Apps shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability to you shall not exceed the amount paid by you for services provided within the past six months.</p>

          <p className="indent-6"><strong>7. Third-Party Links</strong><br/>
          Our website may include links to third-party websites. Quant-Apps is not responsible for the content, policies, or practices of these external sites.</p>

          <p className="indent-6"><strong>8. Termination</strong><br/>
          We reserve the right to suspend or terminate your access to our website or services at our discretion, without prior notice, for any reason, including violation of these Terms.</p>

          <p className="indent-6"><strong>9. Governing Law</strong><br/>
          These Terms shall be governed by and construed in accordance with the laws of Moldova, Republic of. Any disputes arising out of or related to these Terms shall be resolved exclusively in the courts of Moldova, Republic of.</p>

          <p className="indent-6"><strong>10. Modifications to Terms</strong><br/>
          Quant-Apps reserves the right to modify these Terms at any time. Updated Terms will be posted on our website, and continued use of our services indicates acceptance of any changes.</p>

          <p className="indent-6"><strong>11. Contact Us</strong><br/>
          For any questions or concerns about these Terms, please contact us at:<br/>
          Email: support@quant-apps.com<br/>
          Moldova, Republic of</p>

          <p className="indent-6">Thank you for choosing Quant-Apps.</p>
        </div>
        <ElevatingBusiness />
    </div>
  );
};

export default Page;
