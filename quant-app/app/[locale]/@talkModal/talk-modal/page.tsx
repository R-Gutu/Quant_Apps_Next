'use client'
import { Modal } from '@mui/material';
import { useRouter } from "@/i18n/routing";
import ProjectForm from '../../(main)/_components/projectForm';

const Page = () => {

  const router = useRouter();
  return (
    <Modal
      open={true}
      onClose={() => router.back()}
      disableScrollLock={true}
      className='flex justify-center items-center'
    >
      <div className='bg-white overflow-auto w-[70%] h-[90%]'>
        <ProjectForm className='overflow-auto' />
      </div>
    </Modal>
  );
};

export default Page;
