import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Veer Farmhouse',
    description: 'Where rustic charm meets luxury resort living.',
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={clsx(playfair.variable, inter.variable)}>
            <body className="font-sans antialiased text-foreground bg-background">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
