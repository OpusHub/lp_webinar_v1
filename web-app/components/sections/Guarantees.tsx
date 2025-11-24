"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Ban, Zap, BookOpen, CheckCircle2 } from "lucide-react";

export function Guarantees() {
    return (
        <section className="py-20 bg-opus-purple/5 border-y border-opus-purple/10">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Garantias do <span className="text-opus-purple">Webinar</span>
                    </h2>
                    <p className="text-gray-400">Nosso compromisso com o seu tempo e resultado.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        {
                            icon: <Zap className="w-8 h-8 text-yellow-400" />,
                            title: "100% Prático",
                            desc: "Nada de teoria, só o que funciona no campo de batalha."
                        },
                        {
                            icon: <Ban className="w-8 h-8 text-red-400" />,
                            title: "Sem Enrolação",
                            desc: "Direto ao ponto, respeitando cada minuto do seu tempo."
                        },
                        {
                            icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
                            title: "Sem Pitch Forçado",
                            desc: "Vamos ensinar de verdade, não apenas empurrar produto."
                        },
                        {
                            icon: <BookOpen className="w-8 h-8 text-blue-400" />,
                            title: "Framework Completo",
                            desc: "Você sai com um plano de ação claro para implementar."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl text-center hover:border-opus-purple/30 transition-all group shadow-lg"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-base text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto mt-20">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-white inline-flex items-center gap-3">
                            <CheckCircle2 className="text-opus-cyan w-8 h-8" />
                            Você VAI sair sabendo:
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Identificar seus principais gargalos de operação",
                            "Calcular exatamente quanto dinheiro perde por mês",
                            "Decidir o momento certo de investir em arquitetura"
                        ].map((item, i) => (
                            <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-opus-cyan/30 transition-colors group">
                                <div className="w-2 h-2 rounded-full bg-opus-cyan mt-2.5 shrink-0 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-shadow" />
                                <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
