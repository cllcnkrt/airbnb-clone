"use client";

import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

import { Container } from "../container";

export const categories = [
    {
        label: "Beach",
        icon: TbBeach,
        description: "This is a description",
    },
    {
        label: "Windmill",
        icon: GiWindmill,
        description: "This is a Windmill",
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "This is a moden",
    },
];

export const Categories = () => {
    return (
        <Container>
            <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
                {categories.map((category) => (
                    <h1>{category.label}</h1>
                ))}
            </div>
        </Container>
    );
};
