"use client";

import { Modal, Navbar } from "@/components";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Airbnb Clone",
    description: "Airbnb App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <Modal isOpen={true} onClose={() => {}} onSubmit={() => {}} title={"hello"} actionLabel="asdsad"/>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
