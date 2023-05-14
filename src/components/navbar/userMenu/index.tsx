"use client";

import { useCallback, useState } from "react";
import { Avatar } from "@/components";
import { useRegisterModalStore } from "@/hooks";
import { AiOutlineMenu } from "react-icons/ai";

import { MenuItem } from "./menuItem";

export const UserMenu = () => {
    const registerModalStore = useRegisterModalStore();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => {}}
                    className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
                >
                    Airbnb your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="border-1[1px] flex cursor-pointer flex-row items-center gap-3 rounded-full border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
                >
                    <AiOutlineMenu size={16} />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="overflow-hidde absolute right-0 top-12 w-[40vh] rounded-xl bg-white text-sm shadow-md md:w-3/4">
                    <div className="flex cursor-pointer flex-col">
                        <MenuItem onClick={() => {}} label="Login" />
                        <MenuItem onClick={registerModalStore.onOpen} label="Sign Up" />
                    </div>
                </div>
            )}
        </div>
    );
};
