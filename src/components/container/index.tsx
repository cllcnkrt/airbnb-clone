"use client";

import { IContainer } from "./IContainer";

export const Container: React.FC<IContainer.Props> = ({ children }) => {
    return <div className="mx-auto max-w-[2520] px-4 sm:px-2 md:px-10 xl:px-20 ">{children}</div>;
};
