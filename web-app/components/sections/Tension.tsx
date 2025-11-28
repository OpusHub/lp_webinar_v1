"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertTriangle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Card } from "../ui";

export function Tension() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-opus-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">

                {/* 1. Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        O Jogo Mudou. <span className="text-opus-purple">E ninguém te avisou.</span>
                    </h2>
                </motion.div>

                {/* 2. Animated SVG Chart (Responsive) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-3xl mx-auto mb-12"
                >
                    {/* Animated Glow Ring */}
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-opus-cyan/20 to-red-500/20 blur-xl pointer-events-none"
                    />

                    <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-opus-purple/40 bg-black p-2 md:p-8">
                        <svg viewBox="0 0 800 500" className="w-full h-auto relative z-10">
                            <defs>
                                {/* Grid Pattern */}
                                <pattern id="grid" width="80" height="50" patternUnits="userSpaceOnUse">
                                    <path d="M 80 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                                </pattern>

                                {/* Ultra Vibrant Red Gradient */}
                                <linearGradient id="redGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ff0000" stopOpacity="1" />
                                    <stop offset="50%" stopColor="#ff3333" stopOpacity="0.9" />
                                    <stop offset="100%" stopColor="#ff6666" stopOpacity="0.8" />
                                </linearGradient>

                                {/* Ultra Vibrant Cyan Gradient */}
                                <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00ffff" stopOpacity="1" />
                                    <stop offset="50%" stopColor="#00f2fe" stopOpacity="0.9" />
                                    <stop offset="100%" stopColor="#33ccff" stopOpacity="0.8" />
                                </linearGradient>

                                {/* Intense Glow Filters */}
                                <filter id="redNeon">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <filter id="cyanNeon">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <filter id="explosion">
                                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                {/* Radial gradient for collapse point */}
                                <radialGradient id="explosionGlow">
                                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                                    <stop offset="30%" stopColor="#ff0066" stopOpacity="0.8" />
                                    <stop offset="70%" stopColor="#00f2fe" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                                </radialGradient>
                            </defs>

                            {/* Animated background grid */}
                            <rect width="800" height="500" fill="url(#grid)" />

                            {/* Glowing axes */}
                            <line x1="80" y1="450" x2="750" y2="450" stroke="rgba(0,242,254,0.3)" strokeWidth="2" filter="url(#cyanNeon)" />
                            <line x1="80" y1="50" x2="80" y2="450" stroke="rgba(0,242,254,0.3)" strokeWidth="2" filter="url(#cyanNeon)" />

                            {/* Y-axis labels with glow - INCREASED SIZE */}
                            <text x="40" y="100" fill="#00f2fe" fontSize="16" fontWeight="600" textAnchor="middle" filter="url(#cyanNeon)">High</text>
                            <text x="40" y="250" fill="#00f2fe" fontSize="16" fontWeight="600" textAnchor="middle" filter="url(#cyanNeon)">Med</text>
                            <text x="40" y="400" fill="#00f2fe" fontSize="16" fontWeight="600" textAnchor="middle" filter="url(#cyanNeon)">Low</text>

                            {/* X-axis labels with glow - INCREASED SIZE */}
                            <text x="150" y="480" fill="#00f2fe" fontSize="16" fontWeight="600" textAnchor="middle" filter="url(#cyanNeon)">2020</text>
                            <text x="300" y="480" fill="#00f2fe" fontSize="16" fontWeight="600" textAnchor="middle" filter="url(#cyanNeon)">2022</text>
                            <text x="450" y="480" fill="#00f2fe" fontSize="16" fontWeight="600" textAnchor="middle" filter="url(#cyanNeon)">2024</text>
                            <text x="600" y="480" fill="#ff3333" fontSize="18" fontWeight="700" textAnchor="middle" filter="url(#redNeon)">2025</text>
                            <text x="700" y="480" fill="#00f2fe" fontSize="16" fontWeight="600" textAnchor="middle" filter="url(#cyanNeon)">2026</text>

                            {/* SHADOW/GLOW layers for Red Line */}
                            <motion.path
                                d="M 100 400 Q 250 350 400 250 T 700 80"
                                fill="none"
                                stroke="#ff0000"
                                strokeWidth="16"
                                strokeOpacity="0.2"
                                filter="url(#redNeon)"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />

                            {/* Main Red Line (Custo Operacional) - THICKER */}
                            <motion.path
                                d="M 100 400 Q 250 350 400 250 T 700 80"
                                fill="none"
                                stroke="url(#redGlow)"
                                strokeWidth="8"
                                filter="url(#redNeon)"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />

                            {/* SHADOW/GLOW layers for Cyan Line */}
                            <motion.path
                                d="M 100 100 Q 250 150 400 250 T 700 420"
                                fill="none"
                                stroke="#00ffff"
                                strokeWidth="16"
                                strokeDasharray="10 5"
                                strokeOpacity="0.2"
                                filter="url(#cyanNeon)"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                            />

                            {/* Main Cyan Line (Margem Líquida) - THICKER */}
                            <motion.path
                                d="M 100 100 Q 250 150 400 250 T 700 420"
                                fill="none"
                                stroke="url(#cyanGlow)"
                                strokeWidth="8"
                                strokeDasharray="10 5"
                                filter="url(#cyanNeon)"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                            />

                            {/* Label: Custo Operacional - LARGER & ADJUSTED POSITION */}
                            <motion.g
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 2 }}
                            >
                                <rect x="550" y="45" width="220" height="50" rx="8" fill="rgba(255, 0, 0, 0.2)" stroke="#ff3333" strokeWidth="2" filter="url(#redNeon)" />
                                <text x="660" y="75" fill="#ff3333" fontSize="18" fontWeight="bold" textAnchor="middle" filter="url(#redNeon)">Custo Operacional</text>
                            </motion.g>

                            {/* Label: Margem Líquida - LARGER & ADJUSTED POSITION */}
                            <motion.g
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 2.2 }}
                            >
                                <rect x="560" y="390" width="200" height="50" rx="8" fill="rgba(0, 242, 254, 0.2)" stroke="#00f2fe" strokeWidth="2" filter="url(#cyanNeon)" />
                                <text x="660" y="420" fill="#00f2fe" fontSize="18" fontWeight="bold" textAnchor="middle" filter="url(#cyanNeon)">Margem Líquida</text>
                            </motion.g>

                            {/* COLLAPSE POINT - THE EXPLOSION */}
                            <motion.g
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 2.5, type: "spring", stiffness: 200 }}
                            >
                                {/* Massive glow explosion */}
                                <motion.circle
                                    cx="400"
                                    cy="250"
                                    r="100"
                                    fill="url(#explosionGlow)"
                                    opacity="0.6"
                                    animate={{
                                        r: [80, 110, 80],
                                        opacity: [0.4, 0.7, 0.4]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Multiple pulsing rings */}
                                <motion.circle
                                    cx="400" cy="250" r="40"
                                    fill="none" stroke="#fff" strokeWidth="4" opacity="0.4"
                                    animate={{ r: [30, 50, 30], opacity: [0.6, 0.1, 0.6] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.circle
                                    cx="400" cy="250" r="30"
                                    fill="none" stroke="#ff0066" strokeWidth="3" opacity="0.5"
                                    animate={{ r: [20, 40, 20], opacity: [0.7, 0.2, 0.7] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                />

                                {/* Central bright point */}
                                <circle cx="400" cy="250" r="15" fill="#fff" filter="url(#explosion)">
                                    <animate attributeName="opacity" values="1;0.6;1" dur="1s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="400" cy="250" r="8" fill="#ff0066" filter="url(#explosion)">
                                    <animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" />
                                </circle>

                                {/* Warning Label with intense glow */}
                                <rect x="250" y="200" width="300" height="65" rx="12"
                                    fill="rgba(255, 0, 0, 0.3)"
                                    stroke="#ff0000"
                                    strokeWidth="3"
                                    filter="url(#redNeon)">
                                    <animate attributeName="stroke-width" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
                                </rect>

                                <text x="400" y="228" fill="#fff" fontSize="16" fontWeight="900" textAnchor="middle" filter="url(#explosion)">
                                    ⚠️ PONTO DE COLAPSO
                                </text>
                                <text x="400" y="250" fill="#ff3333" fontSize="20" fontWeight="900" textAnchor="middle" filter="url(#redNeon)">
                                    (2025)
                                    <animate attributeName="opacity" values="1;0.7;1" dur="1s" repeatCount="indefinite" />
                                </text>
                            </motion.g>
                        </svg>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
                    </div>
                </motion.div>

                {/* 3. Text Context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Em 2024, as <strong className="text-white">lojas 100% online cresceram +38%</strong>. O mercado se dividiu: quem escala contratando mais gente e sangra a margem <span className="text-red-500 font-bold">(Colapso)</span> e quem escala com arquitetura inteligente <span className="text-opus-cyan font-bold">(Dominação)</span>.
                    </p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-opus-purple via-opus-cyan to-opus-purple"
                    >
                        De qual lado você vai estar?
                    </motion.p>
                </motion.div>

                {/* 4. Comparison Cards (The WOW Factor) */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Group 1: The Old Way */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Card className="relative h-full border-red-500/30 bg-black/40 hover:bg-red-950/20 transition-colors duration-500">
                            <div className="p-2 w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                                <AlertTriangle className="text-red-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                                Grupo 1: O Caminho Antigo
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    Escala contratando mais gente
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    Custos operacionais explodem
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    Margem de lucro sangra
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-red-500/20">
                                <span className="text-red-500 font-bold flex items-center gap-2">
                                    Risco de Quebra <TrendingDown size={16} />
                                </span>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Group 2: The New DNA */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-opus-cyan/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Card className="relative h-full border-opus-cyan/30 bg-black/40 hover:bg-opus-cyan/5 transition-colors duration-500">
                            <div className="p-2 w-12 h-12 rounded-lg bg-opus-cyan/10 flex items-center justify-center mb-6 border border-opus-cyan/20 group-hover:scale-110 transition-transform duration-300">
                                <TrendingUp className="text-opus-cyan" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-opus-cyan transition-colors">
                                Grupo 2: O Novo DNA
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-opus-cyan" />
                                    Escala com IA e Automação
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-opus-cyan" />
                                    Equipe enxuta e estratégica
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-opus-cyan" />
                                    Margem Líquida Protegida
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-opus-cyan/20">
                                <span className="text-opus-cyan font-bold flex items-center gap-2">
                                    Dominação de Mercado <ArrowRight size={16} />
                                </span>
                            </div>
                        </Card>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
