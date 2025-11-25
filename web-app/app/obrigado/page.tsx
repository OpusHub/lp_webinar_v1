"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { CheckCircle2, MessageCircle } from "lucide-react";
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
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                </motion.div>

                {/* Headlines */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold leading-tight"
                    >
                        INSCRIÇÃO RECEBIDA. <br />
                        <span className="text-gray-400 text-2xl md:text-3xl block mt-2">
                            MAS SUA VAGA AINDA NÃO ESTÁ <span className="text-red-500 font-bold">100% SEGURA.</span>
                        </span>
                    </motion.h1>
                </div>

                {/* Progress Bar Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="mb-6">
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-gray-400">Status da Inscrição</span>
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
                        <p className="text-xs text-gray-500 mt-2 text-left">
                            ⚠️ Falta apenas um passo para confirmar sua presença.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Link href="https://chat.whatsapp.com/HES292OTSNa8Mgl0jCpA2e?mode=hqrc" target="_blank">
                        <Button
                            size="lg"
                            className="w-full h-16 text-lg md:text-xl font-bold bg-green-600 hover:bg-green-500 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.4)] animate-pulse hover:animate-none transition-all transform hover:scale-[1.02]"
                        >
                            <MessageCircle className="mr-2 w-6 h-6" />
                            ENTRAR NO GRUPO E GARANTIR ACESSO
                        </Button>
                    </Link>

                    {/* Micro-copy */}
                    <p className="mt-4 text-sm text-gray-400">
                        Relaxa, é um grupo silencioso. Apenas administradores mandam mensagens. <span className="text-white font-medium">Zero spam.</span>
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
