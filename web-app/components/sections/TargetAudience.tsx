"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function TargetAudience() {
    return (
        <section className="py-24 md:py-36 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Para quem é este <span className="text-opus-cyan">Webinar?</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Não queremos desperdiçar seu tempo. Veja se este conteúdo foi desenhado para o seu momento atual.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

                    {/* FOR YOU */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 md:p-12 relative overflow-hidden group hover:border-opus-purple/40 transition-colors shadow-lg"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-opus-purple to-transparent opacity-50" />

                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                                <Check size={28} strokeWidth={3} />
                            </div>
                            <h3 className="text-3xl font-bold text-white">Este webinar é PERFEITO se:</h3>
                        </div>

                        <ul className="space-y-6 mb-10">
                            {[
                                "Você tem E-commerce Próprio e quer parar de depender de terceiros",
                                "Fatura R$200k+/mês e sente que a margem está sendo esmagada",
                                "Tem pessoas no suporte mas ainda não dá conta do volume",
                                "Gasta 30%+ do tempo respondendo 'cadê meu pedido?'",
                                "Vê o faturamento crescer mas o lucro líquido encolher",
                                "Está cansado de escalar contratando e quer escalar com inteligência"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-gray-200 text-lg">
                                    <Check className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                            <h4 className="text-opus-cyan font-bold mb-4 text-base tracking-widest uppercase">Foco Especial Para:</h4>
                            <ul className="space-y-3">
                                {[
                                    "E-commerces próprios que controlam todo o processo",
                                    "Donos e sócios que querem sair do operacional",
                                    "Gestores de operação buscando eficiência real",
                                    "Operações de Dropshipping (framework agrega MUITO)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-base md:text-lg text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-opus-cyan mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* NOT FOR YOU */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-10 md:p-12 relative overflow-hidden hover:border-red-500/30 transition-colors shadow-lg"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />

                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                                <X size={28} strokeWidth={3} />
                            </div>
                            <h3 className="text-3xl font-bold text-white">NÃO perca seu tempo se:</h3>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Sua operação é 100% dependente de Marketplaces (Mercado Livre, Shopee, etc)",
                                "Fatura menos de R$100k/mês (ainda não justifica o investimento)",
                                "Procura uma 'bala de prata' que resolve tudo magicamente",
                                "Quer resultados sem implementar nada",
                                "Acha que IA vai substituir toda sua equipe amanhã",
                                "Está satisfeito com 5-8% de margem líquida"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-gray-300 text-lg">
                                    <X className="w-6 h-6 text-red-500/50 shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
