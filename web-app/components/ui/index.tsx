import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, HTMLMotionProps, useMotionValue } from "framer-motion";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- Button Component ---
interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    noMagnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", noMagnetic = false, children, ...props }, ref) => {
        const variants = {
            primary:
                "bg-gradient-to-r from-opus-purple to-opus-cyan text-white font-bold shadow-[0_0_20px_rgba(106,17,203,0.5)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] border-none",
            secondary:
                "bg-transparent border border-opus-cyan text-opus-cyan hover:bg-opus-cyan/10",
            ghost: "bg-transparent text-gray-400 hover:text-white",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg uppercase tracking-wider",
        };

        // Magnetic Effect
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const textX = useMotionValue(0);
        const textY = useMotionValue(0);

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (noMagnetic) return;

            const rect = e.currentTarget.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            x.set(distanceX * 0.2);
            y.set(distanceY * 0.2);
            textX.set(distanceX * 0.1);
            textY.set(distanceY * 0.1);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
            textX.set(0);
            textY.set(0);
        };

        return (
            <motion.button
                ref={ref}
                style={noMagnetic ? {} : { x, y }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "rounded-full transition-shadow duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <motion.span style={noMagnetic ? {} : { x: textX, y: textY }} className="relative z-10 flex items-center gap-2">
                    {children}
                </motion.span>
            </motion.button>
        );
    }
);
Button.displayName = "Button";

// --- Input Component ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, icon, ...props }, ref) => {
        return (
            <div className="relative group">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-opus-cyan transition-colors">
                        {icon}
                    </div>
                )}
                <input
                    ref={ref}
                    className={cn(
                        "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-opus-cyan/50 focus:ring-1 focus:ring-opus-cyan/50 transition-all",
                        icon && "pl-12",
                        className
                    )}
                    {...props}
                />
            </div>
        );
    }
);
Input.displayName = "Input";

// --- Select Component ---
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, icon, children, ...props }, ref) => {
        return (
            <div className="relative group">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-opus-cyan transition-colors">
                        {icon}
                    </div>
                )}
                <select
                    ref={ref}
                    className={cn(
                        "w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-opus-cyan/50 focus:ring-1 focus:ring-opus-cyan/50 transition-all cursor-pointer",
                        icon && "pl-12",
                        className
                    )}
                    {...props}
                >
                    {children}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>
        );
    }
);
Select.displayName = "Select";

// --- Card Component ---
export const Card = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "glass-card rounded-2xl p-6 md:p-8 relative",
                className
            )}
        >
            {/* Noise Texture Overlay - Removed mix-blend-overlay to prevent artifacts */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat rounded-2xl z-0"></div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};
