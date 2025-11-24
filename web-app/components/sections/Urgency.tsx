"use client";

import { motion } from "framer-motion";
import { Button } from "../ui";
import { scrollToForm } from "@/lib/utils";
import { AlertTriangle, ArrowRight } from "lucide-react";

export function Urgency() {
    return (
        <section className="py-24 md:py-36 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-opus-purple/5 to-black pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        A janela de oportunidade de 2026 <br />
                        <span className="text-opus-cyan">está aberta.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-16">
                        Garanta sua vantagem competitiva agora.
                    </p>

                    {/* Next Steps & CTA */}
                    <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                        {/* Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-opus-cyan to-transparent opacity-50" />

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">Próximo Passo:</h3>

                        <div className="flex flex-col items-center gap-10">
                            <ol className="text-left text-gray-300 space-y-6 text-lg md:text-xl inline-block">
                                <li className="flex gap-5 items-center">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-opus-cyan/10 text-opus-cyan font-bold text-base border border-opus-cyan/20">1</span>
                                    Digite seu melhor e-mail
                                </li>
                                <li className="flex gap-5 items-center">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-opus-cyan/10 text-opus-cyan font-bold text-base border border-opus-cyan/20">2</span>
                                    Confirme seu WhatsApp (para lembrete)
                                </li>
                                <li className="flex gap-5 items-center">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-opus-cyan/10 text-opus-cyan font-bold text-base border border-opus-cyan/20">3</span>
                                    Receba o link exclusivo da transmissão
                                </li>
                                <li className="flex gap-5 items-center">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-opus-cyan/10 text-opus-cyan font-bold text-base border border-opus-cyan/20">4</span>
                                    Bloqueie a agenda: 9/12 às 19h
                                </li>
                            </ol>

                            <Button
                                size="lg"
                                onClick={scrollToForm}
                                className="neon-glow px-16 py-8 text-xl w-full md:w-auto hover:scale-105 transition-transform duration-300 group mt-4"
                                noMagnetic
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    QUERO GARANTIR MINHA VAGA GRATUITA
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
