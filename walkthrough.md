# Walkthrough: Opus Webinar Landing Page

## Visão Geral
A landing page foi desenvolvida utilizando **Next.js 14**, **Tailwind CSS** e **Framer Motion** para garantir alta performance e animações fluidas. O design segue o estilo "Dark Mode Premium" com acentos em Neon e Glassmorphism.

## Como Rodar o Projeto

1.  **Acesse a pasta do projeto:**
    ```bash
    cd web-app
    ```

2.  **Instale as dependências (se ainda não tiver feito):**
    ```bash
    npm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    Abra [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

-   `app/page.tsx`: Página principal que monta todas as seções.
-   `app/globals.css`: Definições de tema (cores, fontes) e utilitários CSS.
-   `components/ui/`: Componentes reutilizáveis (Botão, Input, Card).
-   `components/sections/`: Seções da página (Hero, Tension, Secrets, etc.).
-   `components/background/`: Background de partículas interativo.

## Funcionalidades Implementadas

-   ✅ **Hero Section**: Formulário de alta conversão com validação visual.
-   ✅ **Gráfico Animado**: Visualização SVG da "Margem vs Custos".
-   ✅ **Cards Glassmorphism**: Efeito de vidro fosco com textura de ruído.
-   ✅ **Vídeo Embed**: YouTube Shorts em formato 9:16 (estilo mobile).
-   ✅ **Partículas Interativas**: Fundo que reage ao mouse.
-   ✅ **Responsividade**: Layout adaptado para Mobile e Desktop.
