"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { ICategoryItem } from "./ICategoryItem";

export const CategoryItem: React.FC<ICategoryItem.Props> = ({ label, icon: Icon, selected }) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label,
        };

        if (params?.get("category") === label) {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl(
            {
                url: "/",
                query: updatedQuery,
            },
            { skipNull: true }
        );

        router.push(url);
    };

    return (
        <div
            className={`flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:text-neutral-800 
                        ${selected ? "border-b-neutral-800" : "border-b-transparent"}
                        ${selected ? "text-neutral-800" : "text-neutral-500"}
                        `}
            onClick={handleClick}>
            <Icon size={26} />
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};
