"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { CheckCircle2, MessageCircle, Check } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Reuse the background for continuity
const DnaBackground = dynamic(() => import("@/components/background/DnaBackground").then(mod => mod.DnaBackground));

export default function ThankYouPage() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
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

                {/* Headlines - Improved Hierarchy */}
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
                    className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden group"
                >
                    {/* Glow effect on hover/active */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Progress Bar Section */}
                        <div className="mb-8">
                            <div className="flex justify-between text-sm font-bold mb-2 uppercase tracking-wider">
                                <span className="text-gray-400">Progresso da Inscrição</span>
                                <span className="text-opus-cyan">{progress}%</span>
                            </div>
                            <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-opus-purple to-opus-cyan shadow-[0_0_15px_rgba(0,242,254,0.5)]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                />
                            </div>
                            <p className="text-xs text-opus-cyan/80 mt-2 text-left font-medium">
                                ⚠️ Falta apenas 1 passo para finalizar
                            </p>
                        </div>

                        {/* Value Reinforcement Bullets */}
                        <div className="text-left space-y-3 mb-8 bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                <span className="text-gray-200 text-sm md:text-base">Link exclusivo de acesso no WhatsApp</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                <span className="text-gray-200 text-sm md:text-base">Lembrete 10 min antes da aula</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                <span className="text-gray-200 text-sm md:text-base">Material de apoio complementar</span>
                            </div>
                        </div>

                        {/* CTA Button - Optimized */}
                        <Link href="https://chat.whatsapp.com/HES292OTSNa8Mgl0jCpA2e?mode=hqrc" target="_blank">
                            <Button
                                size="lg"
                                className="w-full h-16 text-lg md:text-xl font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-[0_0_30px_rgba(37,211,102,0.4)] animate-pulse hover:animate-none transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
                            >
                                <MessageCircle className="w-8 h-8" fill="currentColor" />
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
