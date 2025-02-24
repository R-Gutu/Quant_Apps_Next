'use client';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from 'next/image';
import { Slider } from '@mui/material';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Dropzone from "./dropzone";

const schema = yup.object().shape({
    name: yup.string().required("Full Name is required").min(3, "Must be at least 3 characters"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    services: yup.array().of(yup.string()).min(1, "Select at least one service"),
    message: yup.string().required("Message is required").min(10, "Must be at least 10 characters"),
    budget: yup.array().of(yup.number()).required("Budget is required"),
});

type ProjectFormData = {
    services?: (string | undefined)[] | undefined;
    name: string;
    email: string;
    message: string;
    budget: (number | undefined)[];
}

export default function ProjectForm({ className, isPopup = false }: { className?: string, isPopup?: boolean }) {
    const [budget, setBudget] = useState<number[]>([1000, 5000]);
    const [attachments, setAttachments] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, control, formState: { errors }, setValue, watch } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { services: [] },
    });

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (data: ProjectFormData) => {
        try {
            setIsSubmitting(true);

            // First, upload files if there are any
            const uploadedFiles = await Promise.all(
                attachments.map(async (file) => {
                    // Convert file to base64
                    const base64 = await new Promise<string>((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result as string);
                        reader.onerror = (error) => reject(error);
                    });

                    return {
                        name: file.name,
                        data: base64,
                    };
                })
            );

            // Prepare the template parameters
            const templateParams = {
                ...data,
                budget: budget.join(' - '), // Convert budget array to string
                services: data.services?.join(', '), // Convert services array to string
                attachments: uploadedFiles, // Add the attachments
            };

            // Send email with attachments
            const response = await emailjs.send(
                'service_ygz6zab',
                'template_hgfas0q',
                templateParams,
                'NxaXNUOZOCYcvu-Jx'
            );

            if (response.status === 200) {
                alert('Form submitted successfully!');
                // Reset form
                if (formRef.current) {
                    formRef.current.reset();
                }
                setAttachments([]); // Clear attachments
                setBudget([1000, 5000]); // Reset budget
                // Reset services
                setValue("services", []);
            }
        } catch (error) {
            console.error('Failed to submit form:', error);
            alert('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const styles = {
        border: '#6A65FF',
        text: '#FFFFFF',
        placeholder: '#656567',
    }

    const stylesPopup = {
        border: '#FFF',
        text: '#6D758F',
        placeholder: '#E0E0E0',
    }

    const handleDrop = (acceptedFiles: File[]) => {
        setAttachments(acceptedFiles);
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={`flex flex-col gap-[40px] items-center w-full text-[${isPopup ? stylesPopup.text : styles.text}] ${className}`}>
            <div className='flex max-[1200px]:flex-col w-full gap-[40px]'>
                <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                    <label htmlFor="name" className='text-[22px] max-[600px]:text-[16px]'>Full Name</label>
                    <input id="name" {...register("name")} type="text" placeholder='Type here' className={`appearance-none bg-transparent placeholder:text-[${isPopup ? stylesPopup.placeholder : styles.placeholder}] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0`} />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                    <label htmlFor="email" className='text-[22px] max-[600px]:text-[16px]'>Email</label>
                    <input id="email" {...register("email")} type="email" placeholder='Type here' className={`appearance-none bg-transparent placeholder:text-[${isPopup ? stylesPopup.placeholder : styles.placeholder}] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0`} />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
            </div>
            <div className={`w-full flex flex-col gap-[40px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                <h2 className='text-[22px] max-[750px]:hidden'>Select the services you need for your project:</h2>
                <h2 className='hidden text-[22px] max-[600px]:text-[16px] max-[750px]:block'>Why are you contacting us?</h2>
                <div className='grid grid-cols-2 max-[750px]:grid-cols-1 gap-[24px]'>
                    {[{ id: "web-dev", label: "Web development" }, { id: "crm-dev", label: "CRM development" }, { id: "app-dev", label: "Mobile App development" }, { id: "server", label: "Servers/Backend" }, { id: "ui-ux", label: "Design UI/UX" }, { id: "others", label: "Others" }].map(({ id, label }) => (
                        <div key={id} className='flex gap-[10px] items-center'>
                            <div className='relative'>
                                <input
                                    id={id}
                                    type="checkbox"
                                    value={label}
                                    {...register("services")}
                                    onChange={(e) => {
                                        const selectedServices = watch("services") || [];
                                        setValue("services", e.target.checked
                                            ? [...selectedServices, label]
                                            : selectedServices.filter((s) => s !== label)
                                        );
                                    }}
                                    className='peer appearance-none bg-[#0000004D] w-[28px] h-[28px] rounded-[4px] border-[1px] border-solid border-[#6A65FF] hover:bg-[#6a65ff58] checked:!bg-[#6A65FF] cursor-pointer transition-colors'
                                />
                                <Image className='peer-checked:opacity-100 pointer-events-none opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-62%] transition-opacity duration-300' src='/images/icons/check.svg' width={20} height={20} alt='check mark' />
                            </div>
                            <label htmlFor={id} className="text-[18px] max-[600px]:text-[16px]">{label}</label>
                        </div>
                    ))}
                </div>
                {errors.services && <span className="text-red-500 text-sm">{errors.services.message}</span>}
            </div>
            <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                <label className='text-[22px] max-[600px]:text-[16px]'>Your Budget</label>
                <p className={`font-normal text-[18px] mb-[30px] text-[${isPopup ? stylesPopup.placeholder : styles.placeholder}]`}>Slide to indicate your budget range</p>
                <Controller
                    name="budget"
                    control={control}
                    render={({ field }) => (
                        <Slider
                            {...field}
                            value={budget}
                            onChange={(e, v) => setBudget(v as number[])}
                            valueLabelDisplay="on"
                            max={15000}
                            step={100}
                            valueLabelFormat={(v) => `$${v}`}
                            sx={{ color: '#6A65FF' }}
                        />
                    )}
                />
            </div>
            <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                <label htmlFor="message" className='text-[22px] max-[600px]:text-[16px]'>Your Message</label>
                <input type="text" id="message" {...register("message")} placeholder='Type here' className={`appearance-none bg-transparent placeholder:text-[${isPopup ? stylesPopup.placeholder : styles.placeholder}] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0 resize-none`} />
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
            </div>
            {isPopup && (
                <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                    <label className='text-[22px] max-[600px]:text-[16px]'>Attachments</label>
                    <Dropzone onDrop={handleDrop} />
                    {attachments.length > 0 && (
                        <div className="mt-2">
                            <p className="text-sm font-medium">Selected files:</p>
                            <ul className="list-disc pl-5">
                                {attachments.map((file, index) => (
                                    <li key={index} className="text-sm">{file.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
            <button 
                type="submit" 
                disabled={isSubmitting}
                className='appearance-none outline-none border-none rounded-[8px] px-[44px] py-[18px] flex items-center justify-center text-[18px] bg-[linear-gradient(89.13deg,_#836FFF_0.18%,_#4A5DE5_99.86%)] cursor-pointer btn disabled:opacity-50'
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}