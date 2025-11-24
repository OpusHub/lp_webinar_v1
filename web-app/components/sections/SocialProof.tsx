"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function SocialProof() {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-black to-opus-purple/10 overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Context */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h3 className="text-opus-cyan font-bold tracking-widest uppercase text-sm">
                        Não é teoria. É campo de batalha.
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Veja os bastidores de uma operação real.
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Esqueça prints estáticos. Entenda agora como nossa metodologia vem agregando na operação de um de nossos + de 40 clientes.
                    </p>

                    <div className="hidden lg:block pt-4">
                        <div className="flex items-center gap-4 text-gray-400">
                            <div className="w-12 h-[1px] bg-gray-600"></div>
                            <span>Dê o play ao lado</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Video Embed */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center lg:items-end"
                >
                    {/* Video Container with Gradient Border */}
                    <div className="relative p-1 rounded-[2.2rem] bg-gradient-to-b from-opus-purple via-opus-cyan to-opus-purple shadow-[0_0_50px_rgba(106,17,203,0.3)]">
                        <div className="relative w-full max-w-[320px] md:max-w-[350px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/5BPqC8wD8f4?rel=0&modestbranding=1&playsinline=1&controls=1"
                                title="Opus Hub Case Study"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    <p className="lg:hidden text-center text-sm text-gray-500 mt-6 flex items-center gap-2">
                        <Play size={16} className="text-opus-cyan animate-pulse" />
                        Dê o play para entender
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
