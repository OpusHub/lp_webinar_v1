"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { CheckCircle2, MessageCircle, Check } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import { event } from "@/components/analytics/MetaPixel";

// Reuse the background for continuity
const DnaBackground = dynamic(() => import("@/components/background/DnaBackground").then(mod => mod.DnaBackground));

export default function ThankYouPage() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Track Lead event
        event('Lead');

        // Animate progress bar to 90%
        const timer = setTimeout(() => {
            setProgress(90);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen relative flex flex-col items-center justify-center p-4 text-center overflow-hidden">
            <DnaBackground />

            <div className="relative z-10 max-w-2xl w-full space-y-8">

                {/* Centered Logo - Replicated from Hero */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex justify-center mb-4"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <Image
                            src="/opus-logo.png"
                            alt="Opus Hub Logo"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 128px, 160px"
                        />
                    </div>
                </motion.div>

                {/* Icon */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                        <CheckCircle2 className="w-8 h-8 text-green-400 animate-pulse" />
                    </div>
                </motion.div>

                {/* Headlines */}
                <div className="space-y-2">
                    <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl font-medium text-gray-300"
                    >
                        Inscrição confirmada! ✓
                    </motion.h2>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl md:text-4xl font-bold leading-tight text-white"
                    >
                        MAS VOCÊ AINDA NÃO <br className="md:hidden" />
                        <span className="text-red-500">GARANTIU SUA VAGA</span>
                    </motion.h1>
                </div>

                {/* Card - Enhanced Depth & Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,242,254,0.15)] relative overflow-hidden group ring-1 ring-opus-cyan/20"
                >
                    {/* Glow effect on hover/active */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Progress Bar Section */}
                        <div className="mb-8">
                            <div className="flex justify-between text-base md:text-lg font-bold mb-2 uppercase tracking-wider">
                                <span className="text-gray-400">Progresso da Inscrição</span>
                                <span className="text-opus-cyan">{progress}%</span>
                            </div>
                            <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-opus-purple to-opus-cyan shadow-[0_0_15px_rgba(0,242,254,0.5)]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                />
                            </div>
                            <p className="text-sm md:text-base text-opus-cyan/90 mt-3 text-left font-medium flex items-center gap-2">
                                ⚠️ Falta apenas 1 passo para finalizar
                            </p>
                        </div>

                        {/* Value Reinforcement Bullets */}
                        <div className="text-left space-y-4 mb-8 bg-gradient-to-r from-white/5 to-transparent p-5 rounded-xl border-l-4 border-green-500">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full shrink-0"><Check className="w-5 h-5 text-green-400" /></div>
                                <span className="text-gray-200 text-base md:text-lg">Link exclusivo de acesso no WhatsApp</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full shrink-0"><Check className="w-5 h-5 text-green-400" /></div>
                                <span className="text-gray-200 text-base md:text-lg">Lembrete 10 min antes da aula</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full shrink-0"><Check className="w-5 h-5 text-green-400" /></div>
                                <span className="text-gray-200 text-base md:text-lg">Material de apoio complementar</span>
                            </div>
                        </div>

                        {/* CTA Button - Optimized */}
                        <Link href="https://chat.whatsapp.com/HES292OTSNa8Mgl0jCpA2e?mode=hqrc" target="_blank">
                            <Button
                                size="lg"
                                className="w-full h-20 text-xl md:text-2xl font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-[0_0_40px_rgba(37,211,102,0.5)] animate-pulse hover:animate-none transition-all transform hover:scale-[1.02] flex items-center justify-center gap-4"
                            >
                                {/* Official WhatsApp SVG Icon */}
                                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                ENTRAR NO GRUPO AGORA
                            </Button>
                        </Link>

                        {/* Micro-copy */}
                        <p className="mt-4 text-xs text-gray-500">
                            Relaxa, é um grupo silencioso. Apenas administradores mandam mensagens. <span className="text-gray-400 font-medium">Zero spam.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
