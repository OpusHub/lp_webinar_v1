"use client";

import { motion } from "framer-motion";
import { Brain, Target, Layers, MessageCircle } from "lucide-react";

const modules = [
    {
        icon: <Brain className="w-10 h-10 text-red-500" />,
        title: "A Anatomia do Prejuízo Oculto",
        duration: "15min",
        items: [
            "Por que 82% dos carrinhos são abandonados e onde está o gargalo real que drena seu lucro silenciosamente todos os dias."
        ]
    },
    {
        icon: <Layers className="w-10 h-10 text-opus-purple" />,
        title: "O Ecossistema de 5 Camadas",
        duration: "20min",
        items: [
            "Pare de usar ferramentas soltas. Aprenda a montar uma estrutura onde Atendimento, Recuperação e Pós-venda operam juntos."
        ]
    },
    {
        icon: <Target className="w-10 h-10 text-opus-cyan" />,
        title: "Inteligência de Decisão (Opus Brain)",
        duration: "20min",
        items: [
            "Como sair do 'achismo' e usar IA para conversar com seus dados e receber planos de ação estratégicos em tempo real."
        ]
    }
];

export function LearningModules() {
    return (
        <section className="py-24 md:py-36 bg-black relative">
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        O que você vai <span className="text-gradient">Aprender</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Os 3 pilares fundamentais do novo e-commerce.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-opus-purple/30 transition-all group relative overflow-hidden"
                        >
                            {/* Glass Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                    {module.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-6 leading-tight min-h-[64px]">
                                    {module.title}
                                </h3>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {module.items[0]}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Q&A Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-opus-purple/10 to-opus-cyan/10 border border-opus-purple/20 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-opus-purple/20 flex items-center justify-center">
                            <MessageCircle className="w-8 h-8 text-opus-purple" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">Perguntas e Respostas ao Vivo</h3>
                            <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                                Perguntas respondidas na hora por Victor e Lucas. Diagnóstico rápido do seu maior gargalo e dicas personalizadas para seu nicho.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
