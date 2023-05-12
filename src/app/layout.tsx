"use client";

import { Navbar, RegisterModal } from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ToasterProvider } from "@/providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Airbnb Clone",
    description: "Airbnb App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <ToasterProvider />
                <RegisterModal />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
