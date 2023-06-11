"use client";

import { useCallback, useRef, useState } from "react";
import { Avatar } from "@/components";
import { useLoginModalStore, useOnClickOutside, useRegisterModalStore } from "@/hooks";
import { signOut } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";

import { IUserMenu } from "./IUserMenu";
import { MenuItem } from "./menuItem";

export const UserMenu: React.FC<IUserMenu.Props> = ({ currentUser }) => {
    const registerModalStore = useRegisterModalStore();
    const loginModalStore = useLoginModalStore();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setIsOpen(false));

    const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

    return (
        <div className="relative" ref={ref}>
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => {}}
                    className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
                    Airbnb your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="border-1[1px] flex cursor-pointer flex-row items-center gap-3 rounded-full border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1">
                    <AiOutlineMenu size={16} />
                    <div className="hidden md:block">
                        <Avatar srcUrl={currentUser?.image} />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="overflow-hidde absolute right-0 top-12 w-[40vh] rounded-xl bg-white text-sm shadow-md md:w-3/4">
                    <div className="flex cursor-pointer flex-col">
                        {currentUser ? (
                            <>
                                <MenuItem label="My trips" onClick={() => {}} />
                                <MenuItem label="My favorites" onClick={() => {}} />
                                <MenuItem label="My reservations" onClick={() => {}} />
                                <MenuItem label="My properties" onClick={() => {}} />
                                <MenuItem label="Airbnb your home" onClick={() => {}} />
                                <hr />
                                <MenuItem label="Logout" onClick={() => signOut()} />
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={loginModalStore.onOpen} label="Login" />
                                <MenuItem onClick={registerModalStore.onOpen} label="Sign Up" />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
