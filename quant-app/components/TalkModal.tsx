"use client";

import { Modal } from "@mui/material";
import Image from "next/image";
import ProjectForm from "@/components/projectForm";
import * as m from 'motion/react-m';

const TalkModal = ({ setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <Modal
            slotProps={{
                backdrop: {
                    sx: {
                        backdropFilter: "blur(12px)",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }
                }
            }}
            open={true}
            onClose={() => setIsOpen(false)}
            disableScrollLock={true}
            className="flex justify-center items-center outline-none no-doc-scroll"
        >
            <m.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative bg-white w-[70%] max-[700px]:w-[95%] h-[90%] rounded-[28px] py-[25px] overflow-hidden shadow-2xl"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-[20px] px-[10%] max-[1100px]:px-[40px] max-[500px]:px-[20px]">
                    <Image
                        src="/images/icons/logo-mobile.svg"
                        width={200}
                        height={50}
                        alt="Quant Apps Logo"
                        className="max-[500px]:w-[140px]"
                    />
                    <m.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Close modal"
                    >
                        <Image
                            src="/images/icons/cross.svg"
                            width={50}
                            height={50}
                            alt="Close"
                        />
                    </m.button>
                </div>
                
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-[10%] max-[1100px]:mx-[40px] max-[500px]:mx-[20px] mb-[20px]" />
                
                {/* Form */}
                <ProjectForm 
                    className="overflow-auto custom-scrollbar max-h-[calc(90vh-150px)] px-[10%] max-[1100px]:px-[40px] max-[500px]:px-[20px] pb-[20px]" 
                    isPopup 
                />
            </m.div>
        </Modal>
    );
};

export default TalkModal;
