'use client'
import { Modal } from '@mui/material';
import { useRouter, usePathname } from "@/i18n/routing";
import Image from 'next/image';
import ProjectForm from '../../(main)/_components/projectForm';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    document.querySelector('body')?.classList.add('overflow-hidden');
  }, [])

  function handleOnClose() {
    document.querySelector('body')?.classList.remove('overflow-hidden');
    router.back();
  }

  return (
    <Modal
      open={true}
      onClose={handleOnClose}
      disableScrollLock={true}
      className='flex justify-center items-center outline-none'
    >
      <div className='bg-white w-[70%] max-[700px]:w-[95%] h-[90%] rounded-[35px] py-[25px] overflow-hidden shadow-lg'>
        <div className='flex justify-between mb-[25px] px-[10%] max-[1100px]:px-[40px] max-[500px]:px-[20px]'>
          <Image src="/images/icons/logo-mobile.svg" width={237} height={58} alt='logo' className='max-[500px]:w-[150px]' />
          <Image
            src="/images/icons/cross.svg"
            width={70}
            height={106}
            className='cursor-pointer'
            alt='close'
            onClick={handleOnClose}
          />
        </div>
        <ProjectForm className='overflow-auto custom-scrollbar max-h-[60vh] px-[10%] max-[1100px]:px-[40px] max-[500px]:px-[20px]' isPopup />
      </div>
    </Modal>
  );
};

export default Page;
