import "./globals.css";
import type {Metadata} from "next";
import {Geist, Geist_Mono, IM_Fell_Double_Pica, Pinyon_Script} from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
    variable: "--font-pinyon-script",
    weight: "400",
    subsets: ["latin"],
});

const imFell = IM_Fell_Double_Pica({
    variable: "--font-im-fell",
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Boda Cris & Teban 🤍",
    description: "¡Nos vamos a casar!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${pinyonScript.variable} ${imFell.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
