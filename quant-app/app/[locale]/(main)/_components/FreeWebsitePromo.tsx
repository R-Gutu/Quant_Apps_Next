'use client'
import * as m from "motion/react-m"
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import dynamic from "next/dynamic"

const TalkModal = dynamic(() => import("@/components/TalkModal"))

export default function FreeWebsitePromo() {
    const t = useTranslations("freePromo")
    const [modalOpen, setModalOpen] = useState(false)

    const features = [
        t("features.0"),
        t("features.1"),
        t("features.2"),
        t("features.3"),
        t("features.4"),
    ]

    return (
        <>
            <m.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full mt-[60px] relative overflow-hidden"
            >
                {/* Main container with gradient border */}
                <div className="relative rounded-[30px] p-[2px] bg-gradient-to-r from-[#00E676] via-[#00C853] to-[#69F0AE]">
                    <div className="relative rounded-[28px] bg-gradient-to-br from-[#0a1040] via-[#0d1654] to-[#0a0f35] p-[30px] min-[700px]:p-[50px] min-[1200px]:p-[60px] overflow-hidden">
                        
                        {/* Background glow effects */}
                        <div className="absolute top-[-100px] left-[10%] w-[500px] h-[500px] bg-[#00E676]/10 rounded-full blur-[150px] pointer-events-none" />
                        <div className="absolute bottom-[-100px] right-[10%] w-[400px] h-[400px] bg-[#836FFF]/15 rounded-full blur-[120px] pointer-events-none" />
                        
                        {/* Sparkle decorations */}
                        <m.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-[30px] right-[50px] text-[#00E676]/30 hidden min-[800px]:block"
                        >
                            <Sparkles size={50} />
                        </m.div>
                        <m.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-[30px] left-[50px] text-[#6DB9FF]/20 hidden min-[800px]:block"
                        >
                            <Zap size={40} />
                        </m.div>

                        {/* Desktop layout: side by side */}
                        <div className="relative z-10 flex flex-col min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:justify-between gap-[40px] min-[1100px]:gap-[40px] min-[1300px]:gap-[60px]">
                            
                            {/* Left side - Main content */}
                            <div className="flex flex-col items-center min-[1100px]:items-start text-center min-[1100px]:text-left min-[1100px]:flex-1">
                                {/* Badge */}
                                <m.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="mb-[16px] px-[16px] py-[6px] rounded-full bg-gradient-to-r from-[#00C853]/20 to-[#00E676]/20 border border-[#00E676]/50 inline-flex items-center gap-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                                    <span className="text-[#00E676] font-semibold text-[12px] min-[500px]:text-[13px] uppercase tracking-wider">
                                        {t("badge")}
                                    </span>
                                </m.div>

                                {/* GIANT FREE heading - responsive for different languages */}
                                <m.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 150 }}
                                    className="relative w-full"
                                >
                                    {/* Glow behind text */}
                                    <div className="absolute inset-0 text-[50px] min-[400px]:text-[70px] min-[600px]:text-[90px] min-[900px]:text-[110px] min-[1200px]:text-[130px] font-black leading-none blur-[30px] opacity-50 bg-gradient-to-r from-[#00E676] to-[#69F0AE] bg-clip-text text-transparent select-none">
                                        {t("free")}
                                    </div>
                                    <h2 className="relative text-[50px] min-[400px]:text-[70px] min-[600px]:text-[90px] min-[900px]:text-[110px] min-[1200px]:text-[130px] font-black leading-none tracking-tight">
                                        <span className="bg-gradient-to-br from-[#00E676] via-[#69F0AE] to-[#00E676] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,230,118,0.5)]">
                                            {t("free")}
                                        </span>
                                    </h2>
                                </m.div>

                                {/* Title */}
                                <h3 className="text-[22px] min-[500px]:text-[28px] min-[800px]:text-[36px] min-[1200px]:text-[42px] font-bold text-white mt-[-10px] min-[800px]:mt-[-15px]">
                                    {t("title")}
                                </h3>
                                
                                {/* Subtitle - only on mobile/tablet, on desktop it's in the right column */}
                                <p className="text-[15px] min-[500px]:text-[16px] text-white/60 max-w-[500px] mt-[12px] min-[1100px]:hidden">
                                    {t("subtitle")}
                                </p>

                                {/* CTA Button - Mobile */}
                                <m.button
                                    onClick={() => setModalOpen(true)}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="min-[1100px]:hidden group mt-[30px] px-[36px] py-[16px] rounded-[14px] bg-gradient-to-r from-[#00E676] to-[#00C853] text-[#0a1040] font-bold text-[16px] shadow-[0_0_40px_rgba(0,230,118,0.4)] hover:shadow-[0_0_60px_rgba(0,230,118,0.6)] transition-shadow duration-300 flex items-center gap-[10px]"
                                >
                                    {t("cta")}
                                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </m.button>
                            </div>

                            {/* Right side - Features & CTA (desktop) */}
                            <div className="flex flex-col min-[1100px]:max-w-[420px] min-[1300px]:max-w-[480px] min-[1100px]:min-w-[360px]">
                                {/* Subtitle - desktop only */}
                                <p className="hidden min-[1100px]:block text-[14px] text-white/60 mb-[20px] leading-relaxed">
                                    {t("subtitle")}
                                </p>

                                {/* Features list */}
                                <div className="flex flex-col gap-[8px] mb-[20px]">
                                    {features.map((feature, index) => (
                                        <m.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.15 + index * 0.08 }}
                                            className="flex items-start gap-[12px] bg-white/[0.03] backdrop-blur-sm rounded-[10px] px-[14px] py-[10px] border border-white/[0.08] hover:border-[#00E676]/30 hover:bg-white/[0.05] transition-all duration-200"
                                        >
                                        <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-gradient-to-br from-[#00E676] to-[#00C853] flex items-center justify-center shadow-[0_0_15px_rgba(0,230,118,0.4)]">
                                            <Check size={12} className="text-[#0a1040]" strokeWidth={3} />
                                        </div>
                                        <span className="text-white/85 text-[13px] min-[500px]:text-[14px] font-medium leading-snug">
                                            {feature}
                                        </span>
                                        </m.div>
                                    ))}
                                </div>

                                {/* CTA Button - Desktop */}
                                <m.button
                                    onClick={() => setModalOpen(true)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="hidden min-[1100px]:flex group w-full justify-center px-[36px] py-[16px] rounded-[14px] bg-gradient-to-r from-[#00E676] to-[#00C853] text-[#0a1040] font-bold text-[16px] shadow-[0_0_40px_rgba(0,230,118,0.4)] hover:shadow-[0_0_60px_rgba(0,230,118,0.6)] transition-shadow duration-300 items-center gap-[10px]"
                                >
                                    {t("cta")}
                                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </m.button>

                                {/* Trust note */}
                                <p className="mt-[14px] text-white/40 text-[11px] text-center min-[1100px]:text-left">
                                    {t("trust")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </m.section>

            {modalOpen && <TalkModal isOpen={modalOpen} setIsOpen={setModalOpen} />}
        </>
    )
}
