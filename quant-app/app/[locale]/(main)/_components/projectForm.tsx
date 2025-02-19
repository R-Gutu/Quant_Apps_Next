'use client';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from 'next/image';
import { Slider } from '@mui/material';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const schema = yup.object().shape({
    name: yup.string().required("Full Name is required").min(3, "Must be at least 3 characters"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    services: yup.array().of(yup.string()).min(1, "Select at least one service"),
    message: yup.string().required("Message is required").min(10, "Must be at least 10 characters"),
});

export default function ProjectForm() {
    const [budget, setBudget] = useState<number[]>([1000, 5000]);

    const { register, handleSubmit, control, formState: { errors }, setValue, watch } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { services: [] },
    });

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = (data: any) => {
        console.log("Form Data:", { ...data, budget });
        alert("Form submitted successfully!");
        if (formRef.current) {
            emailjs
                .sendForm('service_ygz6zab', 'template_hgfas0q', formRef.current, {
                    publicKey: 'NxaXNUOZOCYcvu-Jx',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    },
                );
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[40px] items-center w-full py-[100px] px-[20%]'>
            <div className='flex max-[1200px]:flex-col w-full gap-[40px]'>
                <div className='w-full flex flex-col gap-[20px] border-[1px] border-solid border-[#6A65FF] rounded-[8px] py-[24px] px-[40px]'>
                    <label htmlFor="name" className='text-[22px] text-white'>Full Name</label>
                    <input id="name" {...register("name")} type="text" placeholder='Type here' className='appearance-none bg-transparent placeholder:text-[#656567] placeholder:text-[18px] border-b-[1px] border-[#333333] p-[6px] outline-none focus:placeholder:text-opacity-0 text-white' />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className='w-full flex flex-col gap-[20px] border-[1px] border-solid border-[#6A65FF] rounded-[8px] py-[24px] px-[40px]'>
                    <label htmlFor="email" className='text-[22px] text-white'>Email</label>
                    <input id="email" {...register("email")} type="email" placeholder='Type here' className='appearance-none bg-transparent placeholder:text-[#656567] placeholder:text-[18px] border-b-[1px] border-[#333333] p-[6px] outline-none focus:placeholder:text-opacity-0 text-white' />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
            </div>
            <div className='text-white w-full flex flex-col gap-[40px] border-[1px] border-solid border-[#6A65FF] rounded-[8px] py-[24px] px-[40px]'>
                <h2 className='text-[22px] text-white'>Select the services you need for your project:</h2>
                <div className='grid grid-cols-2 gap-[24px]'>
                    {[
                        { id: "web-dev", label: "Web development" },
                        { id: "crm-dev", label: "CRM development" },
                        { id: "app-dev", label: "Mobile App development" },
                        { id: "server", label: "Servers/Backend" },
                        { id: "ui-ux", label: "Design UI/UX" },
                        { id: "others", label: "Others" }
                    ].map(({ id, label }) => (
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
                            <label htmlFor={id}>{label}</label>
                        </div>
                    ))}
                </div>
                {errors.services && <span className="text-red-500 text-sm">{errors.services.message}</span>}
            </div>
            <div className='w-full flex flex-col gap-[20px] border-[1px] border-solid border-[#6A65FF] rounded-[8px] py-[24px] px-[40px]'>
                <label className='text-[22px] text-white'>Your Budget</label>
                <p className='font-normal text-[18px] text-[#E6E6E6] mb-[30px]'>Slide to indicate your budget range</p>
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
            <div className='w-full flex flex-col gap-[20px] border-[1px] border-solid border-[#6A65FF] rounded-[8px] py-[24px] px-[40px]'>
                <label htmlFor="message" className='text-[22px] text-white'>Your Message</label>
                <input type="text" id="message" {...register("message")} placeholder='Type here' rows={4} className='appearance-none bg-transparent placeholder:text-[#656567] placeholder:text-[18px] border-b-[1px] border-[#333333] p-[6px] outline-none focus:placeholder:text-opacity-0 text-white resize-none' />
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
            </div>
            <button type="submit" className='appearance-none outline-none border-none px-[44px] py-[18px] flex items-center justify-center text-white text-[18px] bg-[linear-gradient(89.13deg,_#836FFF_0.18%,_#4A5DE5_99.86%)] cursor-pointer btn'>
                Submit
            </button>
        </form>
    );
}
