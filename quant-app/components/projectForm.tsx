'use client';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from 'next/image';
import { Slider } from '@mui/material';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Dropzone from "../app/[locale]/(main)/_components/dropzone";
import { useTranslations } from 'next-intl';
import FormAlert from "./FormAlert";
import { AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils/utils";

export default function ProjectForm({ className, isPopup = false }: { className?: string, isPopup?: boolean }) {
    const t = useTranslations('contactForm');
    const [alertIsOpen, setAlertIsOpen] = useState(false);

    type ProjectFormData = {
        services?: (string | undefined)[];
        name: string;
        email: string;
        message: string;
        budget: (number | null | undefined)[];
    };

    const schema = yup.object().shape({
        name: yup.string().required(t('validation.name.required')).min(3, t('validation.name.minLength')),
        email: yup.string().email(t('validation.email.invalid')).required(t('validation.email.required')),
        services: yup.array().of(yup.string()).min(1, t('validation.services.minSelect')),
        message: yup.string().required(t('validation.message.required')).min(10, t('validation.message.minLength')),
        budget: yup.array().of(yup.number().nullable()).required().min(2, t('validation.budget.required')),
    });

    const [budget, setBudget] = useState<number[]>([1000, 5000]);
    const [attachments, setAttachments] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, control, formState: { errors }, setValue, watch } = useForm<ProjectFormData>({
        resolver: yupResolver(schema),
        defaultValues: { services: [], budget: [1000, 5000] },
    });

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (data: ProjectFormData) => {
        try {
            setIsSubmitting(true);

            const uploadedFiles = await Promise.all(
                attachments.map(async (file) => {
                    return new Promise<string>((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result as string);
                        reader.onerror = (error) => reject(error);
                    });
                })
            );

            const templateParams = {
                ...data,
                budget: budget.join(' - '),
                services: data.services?.join(', '),
                attachments: uploadedFiles,
            };

            const response = await emailjs.send(
                'service_panvzzr',
                'template_e7f0ogb',
                templateParams,
                'S46PU3W0ILp9NXki4'
            );

            if (response.status === 200) {
                setAlertIsOpen(true);
                if (formRef.current) {
                    formRef.current.reset();
                }
                setAttachments([]);
                setBudget([1000, 5000]);
                setValue("services", []);
            }

        } catch (error) {
            console.error('Failed to submit form:', error);
            alert(t('notifications.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDrop = (acceptedFiles: File[]) => {
        setAttachments(acceptedFiles);
    };

    const services = [
        { id: "web-dev", label: t('services.0.label') },
        { id: "crm-dev", label: t('services.1.label') },
        { id: "app-dev", label: t('services.2.label') },
        { id: "server", label: t('services.3.label') },
        { id: "ui-ux", label: t('services.4.label') },
        { id: "others", label: t('services.5.label') }
    ];

    // Card styles based on popup mode
    const cardClasses = cn(
        "w-full flex flex-col gap-[20px] rounded-[12px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] border",
        isPopup 
            ? "border-gray-200 shadow-md bg-white" 
            : "border-[#6A65FF]/30 bg-transparent"
    );

    const labelClasses = cn(
        "text-[20px] max-[600px]:text-[16px] font-medium",
        isPopup ? "text-gray-800" : "text-white"
    );

    const inputClasses = cn(
        "appearance-none bg-transparent text-[16px] border-b p-[6px] pl-0 outline-none focus:placeholder:opacity-0 transition-colors",
        isPopup 
            ? "text-gray-800 border-gray-300 placeholder:text-gray-400 focus:border-[#6A65FF]" 
            : "text-white border-gray-600 placeholder:text-gray-500 focus:border-[#6A65FF]"
    );

    const descriptionClasses = cn(
        "font-normal text-[16px] mb-[20px]",
        isPopup ? "text-gray-500" : "text-gray-400"
    );

    return (
        <>
            <form 
                ref={formRef} 
                onSubmit={handleSubmit(onSubmit)} 
                className={cn(
                    "flex flex-col gap-[30px] items-center w-full",
                    isPopup ? "text-gray-800" : "text-white",
                    className
                )}
            >
                {/* Name and Email */}
                <div className='flex max-[1200px]:flex-col w-full gap-[30px]'>
                    <div className={cardClasses}>
                        <label htmlFor="name" className={labelClasses}>
                            {t('fields.fullName')}
                        </label>
                        <input 
                            id="name" 
                            {...register("name")} 
                            type="text" 
                            placeholder={t('placeholders.input')} 
                            className={inputClasses}
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>
                    <div className={cardClasses}>
                        <label htmlFor="email" className={labelClasses}>
                            {t('fields.email')}
                        </label>
                        <input 
                            id="email" 
                            {...register("email")} 
                            type="email" 
                            placeholder={t('placeholders.input')} 
                            className={inputClasses}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                </div>

                {/* Services */}
                <div className={cn(cardClasses, "gap-[30px]")}>
                    <h2 className={cn(labelClasses, "max-[750px]:hidden")}>
                        {t('fields.servicesHeading')}
                    </h2>
                    <h2 className={cn(labelClasses, "hidden max-[750px]:block")}>
                        {t('fields.servicesMobile')}
                    </h2>
                    <div className='grid grid-cols-2 max-[750px]:grid-cols-1 gap-[20px]'>
                        {services.map(({ id, label }) => (
                            <div key={id} className='flex gap-[12px] items-center'>
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
                                        className={cn(
                                            'peer appearance-none w-[26px] h-[26px] rounded-[6px] border-2 cursor-pointer transition-all',
                                            isPopup 
                                                ? 'bg-gray-100 border-[#6A65FF] hover:bg-[#6A65FF]/20 checked:!bg-[#6A65FF]'
                                                : 'bg-[#0000004D] border-[#6A65FF] hover:bg-[#6a65ff58] checked:!bg-[#6A65FF]'
                                        )}
                                    />
                                    <Image 
                                        className='peer-checked:opacity-100 pointer-events-none opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200' 
                                        src='/images/icons/check.svg' 
                                        width={16} 
                                        height={16} 
                                        alt='check' 
                                    />
                                </div>
                                <label 
                                    htmlFor={id} 
                                    className={cn(
                                        "text-[16px] cursor-pointer",
                                        isPopup ? "text-gray-700" : "text-white/90"
                                    )}
                                >
                                    {label}
                                </label>
                            </div>
                        ))}
                    </div>
                    {errors.services && <span className="text-red-500 text-sm">{errors.services.message}</span>}
                </div>

                {/* Budget */}
                <div className={cardClasses}>
                    <label className={labelClasses}>{t('fields.budget')}</label>
                    <p className={descriptionClasses}>{t('fields.budgetDescription')}</p>
                    <Controller
                        name="budget"
                        control={control}
                        render={({ field }) => (
                            <Slider
                                {...field}
                                aria-label="Budget slider"
                                value={budget}
                                onChange={(_, v) => {
                                    setBudget(v as number[]);
                                    field.onChange(v);
                                }}
                                valueLabelDisplay="on"
                                max={15000}
                                step={100}
                                valueLabelFormat={(v) => `$${v}`}
                                sx={{ 
                                    color: '#6A65FF',
                                    '& .MuiSlider-valueLabel': {
                                        backgroundColor: '#6A65FF',
                                    }
                                }}
                            />
                        )}
                    />
                </div>

                {/* Message */}
                <div className={cardClasses}>
                    <label htmlFor="message" className={labelClasses}>
                        {t('fields.message')}
                    </label>
                    <input 
                        type="text" 
                        id="message" 
                        {...register("message")} 
                        placeholder={t('placeholders.input')} 
                        className={inputClasses}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                </div>

                {/* Attachments (only in popup) */}
                {isPopup && (
                    <div className={cardClasses}>
                        <label className={labelClasses}>{t('fields.attachments')}</label>
                        <Dropzone onDrop={handleDrop} />
                        {attachments.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm font-medium text-gray-600">{t('fields.selectedFiles')}</p>
                                <ul className="list-disc pl-5">
                                    {attachments.map((file, index) => (
                                        <li key={index} className="text-sm text-gray-500">{file.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className='appearance-none outline-none border-none rounded-[10px] px-[44px] py-[16px] flex items-center justify-center text-[17px] font-semibold bg-gradient-to-r from-[#836FFF] to-[#4A5DE5] cursor-pointer btn disabled:opacity-50 text-white shadow-lg hover:shadow-[0_0_25px_rgba(106,101,255,0.4)]'
                >
                    {isSubmitting ? t('buttons.submitting') : t('buttons.submit')}
                </button>
            </form>
            <AnimatePresence>
                {alertIsOpen && <FormAlert setIsOpen={setAlertIsOpen} />}
            </AnimatePresence>
        </>
    );
}
