"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { categoriesData } from "@/data";

import { Container } from "../container";
import { CategoryItem } from "./categoryItem";

export const Categories = () => {
    const params = useSearchParams();
    const category = params?.get("category");
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    if (!isHomePage) {
        return null;
    }

    return (
        <Container>
            <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
                {categoriesData.map((categoryItem) => (
                    <CategoryItem
                        key={categoryItem.label}
                        label={categoryItem.label}
                        icon={categoryItem.icon}
                        selected={category === categoryItem.label}
                    />
                ))}
            </div>
        </Container>
    );
};
