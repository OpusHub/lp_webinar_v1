"use client";

import { motion } from "framer-motion";
import { TrendingDown, Layers, Brain, ArrowRight } from "lucide-react";
import { Card } from "../ui";

const secrets = [
    {
        icon: <TrendingDown className="w-8 h-8 text-red-500" />,
        title: "A Anatomia do Prejuízo Oculto",
        description: "Por que 82% dos carrinhos são abandonados e onde está o gargalo real que drena seu lucro silenciosamente todos os dias.",
        delay: 0.2
    },
    {
        icon: <Layers className="w-8 h-8 text-opus-purple" />,
        title: "O Ecossistema de 5 Camadas",
        description: "Pare de usar ferramentas soltas. Aprenda a montar uma estrutura onde Atendimento, Recuperação e Pós-venda operam juntos.",
        delay: 0.4
    },
    {
        icon: <Brain className="w-8 h-8 text-opus-cyan" />,
        title: "Inteligência de Decisão (Opus Brain)",
        description: "Como sair do 'achismo' e usar IA para conversar com seus dados e receber planos de ação estratégicos em tempo real.",
        delay: 0.6
    }
];

export function Secrets() {
    return (
        <section className="py-24 px-4 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">O que você vai aprender</h2>
                    <p className="text-gray-400">Os 3 pilares fundamentais do novo e-commerce.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {secrets.map((secret, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: secret.delay }}
                        >
                            <Card className="h-full hover:border-opus-cyan/30 transition-colors group">
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:bg-white/10 transition-colors">
                                    {secret.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-opus-cyan transition-colors">
                                    {secret.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {secret.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
