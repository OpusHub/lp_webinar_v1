"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Monitor, DollarSign, MessageSquare, Video, FileText } from "lucide-react";

export function EventDetails() {
    return (
        <section className="py-24 md:py-36 relative border-t border-white/5 bg-black">
            <div className="container mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-10">
                            Informações do <span className="text-opus-purple">Evento</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-opus-purple/50 transition-colors shadow-lg">
                                <Calendar className="w-8 h-8 text-opus-cyan shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Quando</h3>
                                    <p className="text-gray-300 text-lg">9 de Dezembro (Segunda-feira)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-opus-purple/50 transition-colors shadow-lg">
                                <Clock className="w-8 h-8 text-opus-cyan shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Horário</h3>
                                    <p className="text-gray-300 text-lg">19h00 (Horário de Brasília)</p>
                                    <p className="text-sm text-gray-500 mt-2 font-medium">60min de conteúdo + Q&A</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-opus-purple/50 transition-colors shadow-lg">
                                <Monitor className="w-8 h-8 text-opus-cyan shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Formato</h3>
                                    <p className="text-gray-300 text-lg">100% Online e Ao Vivo</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-opus-purple/50 transition-colors shadow-lg">
                                <DollarSign className="w-8 h-8 text-opus-cyan shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Investimento</h3>
                                    <p className="text-green-400 font-bold text-lg">GRATUITO</p>
                                    <p className="text-sm text-gray-500 mt-1">Por tempo limitado</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* How it Works Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-[2rem] p-10 md:p-12 shadow-2xl"
                    >
                        <h3 className="text-3xl font-bold mb-10 text-white">Como funciona:</h3>

                        <ul className="space-y-10 relative">
                            {/* Connector Line */}
                            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-white/10" />

                            <li className="flex gap-8 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-opus-purple flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(106,17,203,0.5)] border-2 border-white/10">
                                    <Monitor size={24} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl mb-2">Transmissão ao vivo</h4>
                                    <p className="text-gray-400 text-base">Acesso direto do seu navegador, sem instalar nada.</p>
                                </div>
                            </li>

                            <li className="flex gap-8 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-black border border-opus-purple flex items-center justify-center shrink-0">
                                    <MessageSquare size={24} className="text-opus-purple" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl mb-2">Chat liberado</h4>
                                    <p className="text-gray-400 text-base">Tire suas dúvidas em tempo real com os especialistas.</p>
                                </div>
                            </li>

                            <li className="flex gap-8 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-black border border-opus-purple flex items-center justify-center shrink-0">
                                    <Video size={24} className="text-opus-purple" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl mb-2">Gravação por 24h</h4>
                                    <p className="text-gray-400 text-base">Disponível apenas para quem se inscreveu.</p>
                                </div>
                            </li>

                            <li className="flex gap-8 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-black border border-opus-purple flex items-center justify-center shrink-0">
                                    <FileText size={24} className="text-opus-purple" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-xl mb-2">Material complementar</h4>
                                    <p className="text-gray-400 text-base">PDFs e frameworks exclusivos entregues no final.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
