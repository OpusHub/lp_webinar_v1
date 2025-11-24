"use client";

import React from 'react';

export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>&copy; 2025 Opus Hub. Todos os direitos reservados. | CNPJ: 61.261.446/0001-64</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
