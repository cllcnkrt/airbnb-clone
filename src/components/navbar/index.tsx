import React from "react";

import { ClientContainer } from "../clientContainer";
import { Logo } from "./logo";
import { Search } from "./search";
import { UserMenu } from "./userMenu";

export const Navbar = () => {
    return (
        <div className="fixed z-10 w-full bg-white shadow-sm">
            <div className="border-b-[1px] py-4">
                <ClientContainer>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu />
                    </div>
                </ClientContainer>
            </div>
        </div>
    );
};
