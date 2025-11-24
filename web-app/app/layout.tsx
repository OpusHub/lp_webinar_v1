import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "O Novo DNA do E-commerce 2026 | Opus Hub",
  description: "Webinar exclusivo para gestores de e-commerce. Descubra o método para parar de sangrar margem e dominar seu nicho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
