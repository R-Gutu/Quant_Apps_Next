'use client'
import { Modal } from '@mui/material';
import { useRouter } from "@/i18n/routing";
import Image from 'next/image';
import ProjectForm from '../../(main)/_components/projectForm';

const Page = () => {
  const router = useRouter();

  return (
    <Modal
      open={true}
      onClose={() => router.back()}
      disableScrollLock={true}
      className='flex justify-center items-center outline-none'
    >
      <div className='bg-white w-[70%] h-[90%] rounded-[35px] py-[25px] overflow-hidden shadow-lg'>
        <div className='flex justify-between mb-[25px] px-[10%] max-[1100px]:px-[40px]'>
          <Image src="/images/icons/logo-mobile.svg" width={237} height={58} alt='logo' />
          <Image 
            src="/images/icons/cross.svg" 
            width={70} 
            height={106} 
            className='cursor-pointer' 
            alt='close' 
            onClick={() => router.back()}
          />
        </div>
          <ProjectForm className='overflow-auto custom-scrollbar max-h-[60vh] px-[10%] max-[1100px]:px-[40px]' isPopup />
      </div>
    </Modal>
  );
};

export default Page;
