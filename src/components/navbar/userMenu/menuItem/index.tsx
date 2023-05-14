"use client";

import { IMenuItem } from "./IMenuItem";

export const MenuItem: React.FC<IMenuItem.Props> = ({ onClick, label }) => {
    return (
        <div onClick={onClick} className="px-4 py-3 font-semibold transition hover:bg-neutral-100">
            {label}
        </div>
    );
};
