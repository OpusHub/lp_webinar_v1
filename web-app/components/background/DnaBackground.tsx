"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function DnaBackground() {
    const [numPairs, setNumPairs] = useState(20); // Default lower for safety
    const width = 1600;
    const spacing = width / numPairs;

    useEffect(() => {
        // Adjust particle count based on device capability/width
        const updatePairs = () => {
            if (window.innerWidth < 768) {
                setNumPairs(15); // Drastically reduce for mobile
            } else {
                setNumPairs(40); // Full detail for desktop
            }
        };

        updatePairs();
        window.addEventListener('resize', updatePairs);
        return () => window.removeEventListener('resize', updatePairs);
    }, []);

    // Mouse Parallax Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 40, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 40, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX / window.innerWidth - 0.5);
            y.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    const moveX = useTransform(mouseX, [-0.5, 0.5], [30, -30]);
    const moveY = useTransform(mouseY, [-0.5, 0.5], [30, -30]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black flex items-center justify-center">
            {/* Atmospheric Glows (Breathing) */}
            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-opus-purple/20 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.1, 1, 1.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-opus-cyan/10 rounded-full blur-[140px] pointer-events-none"
            />

            {/* DNA Container with Parallax */}
            <motion.div
                style={{ x: moveX, y: moveY }}
                className="w-[120%] h-[600px] opacity-80 rotate-12 blur-[0.5px] scale-110"
            >
                <svg viewBox={`0 0 ${width} 400`} className="w-full h-full">
                    <defs>
                        <linearGradient id="grad-pair" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#6a11cb" />
                            <stop offset="100%" stopColor="#00f2fe" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {Array.from({ length: numPairs }).map((_, i) => (
                        <BasePair key={i} x={i * spacing} delay={i * 0.15} />
                    ))}
                </svg>
            </motion.div>
        </div>
    );
}

function BasePair({ x, delay }: { x: number; delay: number }) {
    return (
        <motion.g initial="initial" animate="animate">
            {/* Connecting Line */}
            <motion.line
                x1={x}
                x2={x}
                stroke="url(#grad-pair)"
                strokeWidth="1.5"
                variants={{
                    animate: {
                        y1: [150, 250, 150],
                        y2: [250, 150, 250],
                        opacity: [0.1, 0.6, 0.1],
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: -delay,
                        },
                    },
                }}
            />

            {/* Top Strand Dot */}
            <motion.circle
                cx={x}
                fill="#6a11cb"
                filter="url(#glow)"
                variants={{
                    animate: {
                        cy: [150, 250, 150],
                        r: [2, 6, 2],
                        opacity: [0.4, 1, 0.4],
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: -delay,
                        },
                    },
                }}
            />

            {/* Bottom Strand Dot */}
            <motion.circle
                cx={x}
                fill="#00f2fe"
                filter="url(#glow)"
                variants={{
                    animate: {
                        cy: [250, 150, 250],
                        r: [6, 2, 6],
                        opacity: [0.4, 1, 0.4],
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: -delay,
                        },
                    },
                }}
            />
        </motion.g>
    );
}
