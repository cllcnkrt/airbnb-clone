"use client";

import { Nunito } from "next/font/google";
import { LoginModal, Navbar, RegisterModal } from "@/components";
import { ToasterProvider } from "@/providers";

import "./globals.css";

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
                <LoginModal />
                <RegisterModal />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
