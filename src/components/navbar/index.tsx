import React from "react";

import { Container } from "../container";
import { INavbar } from "./INavbar";
import { Logo } from "./logo";
import { Search } from "./search";
import { UserMenu } from "./userMenu";

export const Navbar: React.FC<INavbar.Props> = ({ currentUser }) => {
    return (
        <div className="fixed z-10 w-full bg-white shadow-sm">
            <div className="border-b-[1px] py-4">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
        </div>
    );
};
