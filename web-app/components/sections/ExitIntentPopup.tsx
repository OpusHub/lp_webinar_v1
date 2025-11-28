"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Input, Button } from "../ui";
import { useRouter } from "next/navigation";

export function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        // Check if popup was already shown in this session
        const hasSeenPopup = sessionStorage.getItem('exit-popup-shown');
        if (hasSeenPopup) return;

        const handleMouseLeave = (e: MouseEvent) => {
            // Trigger only when mouse leaves from the top (going to address bar/close tab)
            if (e.clientY < 10 && !hasSeenPopup) {
                setIsVisible(true);
                sessionStorage.setItem('exit-popup-shown', 'true');
            }
        };

        // Add listener after 5 seconds (to avoid false positives)
        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
        }, 5000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        // Handle ESC key to close
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsVisible(false);
            }
        };

        if (isVisible) {
            document.addEventListener('keydown', handleEsc);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://webhook.opusbr.com/webhook/forms-webinar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    source: 'exit_popup',
                    submittedAt: new Date().toISOString()
                }),
            });

            if (response.ok) {
                setStatus('success');
                router.push('/obrigado');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsVisible(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackdropClick}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md bg-gradient-to-br from-gray-900/95 to-black/95 border border-opus-purple/30 rounded-3xl p-8 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            aria-label="Fechar"
                        >
                            <X size={24} />
                        </button>

                        {/* Content */}
                        <div className="text-center mb-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="inline-block mb-4 text-6xl"
                            >
                                ⚠️
                            </motion.div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                Espera! Não perca isso
                            </h2>
                            <p className="text-gray-400 text-sm">
                                <span className="text-opus-cyan font-semibold">Última chance:</span> Garanta sua vaga no webinar que vai transformar seu e-commerce em 2026
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Seu nome completo"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full"
                                disabled={status === 'loading'}
                            />
                            <Input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full"
                                disabled={status === 'loading'}
                            />
                            <Input
                                type="tel"
                                placeholder="Seu WhatsApp"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                                className="w-full"
                                disabled={status === 'loading'}
                            />

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full neon-glow"
                                noMagnetic
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'ENVIANDO...' : 'GARANTIR MINHA VAGA'}
                            </Button>

                            {status === 'error' && (
                                <p className="text-red-400 text-xs text-center">
                                    Ocorreu um erro. Tente novamente.
                                </p>
                            )}

                            <p className="text-xs text-gray-500 text-center">
                                🔒 Seus dados estão seguros. Sem spam.
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
