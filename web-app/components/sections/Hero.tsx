"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, Clock, Hourglass, User, Mail, Phone, ShoppingBag } from "lucide-react";
import { Button, Card, Input, Select } from "../ui";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatPhone } from "../../lib/utils";

export function Hero() {
    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        channel: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
                    phone: `55${formData.phone.replace(/\D/g, "")}`,
                    source: 'hero_form',
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

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        // Disable tilt on mobile to save resources
        if (window.innerWidth < 768) return;

        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    return (
        <section className="relative min-h-screen flex flex-col justify-start pt-4 md:pt-6 pb-20 px-4 overflow-hidden perspective-1000">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-opus-purple/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto relative z-10">

                {/* Centered Logo */}
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                        <Image
                            src="/opus-logo.png"
                            alt="Opus Hub Logo"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 160px, 192px"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Copy */}
                    <div className="space-y-8">


                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            O NOVO DNA DO <br />
                            <span className="text-gradient">E-COMMERCE DE</span>
                            <span className="relative ml-2 inline-block text-[#00f2fe]">
                                2026
                                <span className="absolute inset-0 animate-pulse text-[#00f2fe] opacity-50 blur-sm">2026</span>
                            </span>
                        </h1>

                        <h2 className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                            Sua operação cresce, mas o lucro encolhe? Descubra o método para parar de sangrar margem com custos de equipe e ineficiência operacional antes que o mercado mude.
                        </h2>

                        <div className="flex flex-wrap gap-6 text-base font-medium text-gray-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-opus-purple" />
                                <span>09/12</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-opus-purple" />
                                <span>19h00</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Hourglass className="w-5 h-5 text-opus-purple" />
                                <span>Duração: 60min</span>
                            </div>
                        </div>

                        <div className="inline-block px-3 py-1 rounded-full border border-opus-cyan/30 bg-opus-cyan/10 backdrop-blur-sm mt-6">
                            <span className="text-xs font-bold tracking-widest text-opus-cyan uppercase">
                                Evento para Donos de E-commerce
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Form with 3D Tilt */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            onMouseMove={onMouseMove}
                            onMouseLeave={() => {
                                x.set(0);
                                y.set(0);
                            }}
                        >
                            <div id="registration-form">
                                <Card className="border-opus-purple/50 shadow-[0_0_50px_rgba(106,17,203,0.15)]">
                                    <div className="text-center mb-8 transform translate-z-10">
                                        <h3 className="text-2xl font-bold text-white mb-2">Garanta sua vaga gratuita</h3>
                                        <p className="text-sm text-gray-400">Junte-se a elite do e-commerce nacional.</p>
                                    </div>

                                    {status === 'success' ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center"
                                        >
                                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="text-2xl">🎉</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2">Inscrição Confirmada!</h4>
                                            <p className="text-gray-300 text-sm">
                                                Você receberá todos os detalhes do webinar no seu e-mail e WhatsApp em breve.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form className="space-y-4" onSubmit={handleSubmit}>
                                            <Input
                                                placeholder="Nome Completo"
                                                icon={<User size={18} />}
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                disabled={status === 'loading'}
                                            />
                                            <Input
                                                type="email"
                                                placeholder="E-mail Corporativo"
                                                icon={<Mail size={18} />}
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                disabled={status === 'loading'}
                                            />
                                            <Input
                                                type="tel"
                                                placeholder="WhatsApp / Telefone"
                                                icon={<Phone size={18} />}
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                                                disabled={status === 'loading'}
                                            />
                                            <Select
                                                icon={<ShoppingBag size={18} />}
                                                value={formData.channel}
                                                onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                                                disabled={status === 'loading'}
                                            >
                                                <option value="" disabled>Qual seu canal de vendas principal?</option>
                                                <option value="site">Site Próprio</option>
                                                <option value="marketplace">Marketplace</option>
                                                <option value="hibrido">Híbrido (Ambos)</option>
                                                <option value="nao-vendo">Ainda não vendo</option>
                                            </Select>

                                            <Button
                                                size="lg"
                                                className="w-full mt-4 neon-glow group"
                                                disabled={status === 'loading'}
                                            >
                                                <span className="relative z-10">
                                                    {status === 'loading' ? 'ENVIANDO...' : 'GARANTIR MINHA VAGA'}
                                                </span>
                                            </Button>

                                            {status === 'error' && (
                                                <p className="text-red-400 text-xs text-center">
                                                    Ocorreu um erro ao enviar. Por favor, tente novamente.
                                                </p>
                                            )}

                                            <div className="mt-4 flex justify-center relative z-20">
                                                <p className="text-xs text-center text-gray-500 flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
                                                    🔒 Seus dados estão seguros. Somos anti-spam.
                                                </p>
                                            </div>
                                        </form>
                                    )}
                                </Card>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
