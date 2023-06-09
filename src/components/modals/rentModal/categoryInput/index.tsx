"use client";

import React, { FC } from "react";

import { ICategoryInput } from "./ICategoryInput";

export const CategoryInput: FC<ICategoryInput.Props> = ({ icon: Icon, label, selected, onClick }) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
        flex cursor-pointer flex-col gap-3 rounded-xl border-2 p-4 transition hover:border-black
        ${selected ? "border-black" : "border-neutral-200"}
        `}>
            <Icon size={30} />
            <div className="font-semibold">{label}</div>
        </div>
    );
};
