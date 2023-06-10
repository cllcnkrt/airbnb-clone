import { Nunito } from "next/font/google";
import { LoginModal, Navbar, RegisterModal } from "@/components";
import { ToasterProvider } from "@/providers";

import "./globals.css";
import { getCurrentUser } from "@/actions";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
    title: "Airbnb Clone",
    description: "Airbnb App",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    return (
        <html lang="en">
            <body className={nunito.className}>
                <ToasterProvider />
                <LoginModal />
                <RegisterModal />
                <Navbar currentUser={currentUser} />
                {children}
            </body>
        </html>
    );
}
