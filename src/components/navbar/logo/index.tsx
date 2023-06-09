"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();

    return (
        <Image
            className="hidden cursor-pointer md:block"
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            onClick={() => router.push("/")}
        />
    );
};
