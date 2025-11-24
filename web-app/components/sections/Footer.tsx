"use client";

import { Button } from "../ui";
import { motion } from "framer-motion";
import { scrollToForm } from "@/lib/utils";

export function Footer() {
    return (
        <footer className="bg-black py-12 px-4 border-t border-white/5 relative">
            <div className="container mx-auto text-center">

                <div className="mb-12 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        A janela de oportunidade de 2026 está aberta. <br />
                        <span className="text-gray-400 text-lg font-normal">Garanta sua vantagem competitiva agora.</span>
                    </h2>
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            noMagnetic
                            onClick={scrollToForm}
                            className="neon-glow px-12 hover:scale-105 transition-transform duration-300"
                        >
                            GARANTIR MINHA VAGA AGORA
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                    <p>© 2025 Opus Hub. Todos os direitos reservados. | CNPJ: 61.261.446/0001-64</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>

            </div>

            {/* Mobile Sticky CTA */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 2 }}
                className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-lg border-t border-white/10 md:hidden z-50"
            >
                <Button
                    size="lg"
                    noMagnetic
                    onClick={scrollToForm}
                    className="w-full neon-glow shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    GARANTIR MINHA VAGA AGORA
                </Button>
            </motion.div>
        </footer>
    );
}
