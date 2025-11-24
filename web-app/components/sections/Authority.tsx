"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Authority() {
    return (
        <section className="py-24 px-4 bg-black relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Quem vai guiar você?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Mentor 1: Victor Yulo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-opus-purple/30 mb-6 overflow-hidden relative">
                            <Image
                                src="/victor.png"
                                alt="Victor Yulo"
                                fill
                                className="object-cover scale-110"
                                style={{ objectPosition: '50% 20%' }}
                                priority
                            />
                            <div className="absolute inset-0 bg-opus-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">Victor Yulo</h3>
                        <p className="text-opus-purple font-medium mb-4">Especialista em Arquitetura de Escala</p>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Especialista em arquitetura de negócios escaláveis e funis de venda. Gerenciou R$ 3M+ em tráfego para diversos negócios. Foco obsessivo em dados e processos.
                        </p>
                    </motion.div>

                    {/* Mentor 2: Lucas Araújo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-opus-cyan/30 mb-6 overflow-hidden relative">
                            <Image
                                src="/lucas.jpg"
                                alt="Lucas Araújo"
                                fill
                                className="object-cover object-center scale-110"
                            />
                            <div className="absolute inset-0 bg-opus-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">Lucas Araújo</h3>
                        <p className="text-opus-cyan font-medium mb-4">Especialista em Conversão e Vendas</p>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Implementou o método em +40 operações. Foco em execução rápida e otimização de processos comerciais. Especialista em playbooks comerciais e vendas high ticket.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
