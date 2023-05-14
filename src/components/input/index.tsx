"use client";

import { BiDollar } from "react-icons/bi";

import { IInput } from "./IInput";

export const Input: React.FC<IInput.Props> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    required,
    register,
    errors,
}) => {
    return (
        <div className="relative w-full">
            {formatPrice && <BiDollar size={24} className="absolute left-2 top-5 text-neutral-700" />}
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                type={type}
                className={`
                        disable:opacity-70
                        disable:cursor-not-allowed
                        peer
                        w-full
                        rounded-md
                        border-2
                        bg-white
                        p-4
                        pt-6
                        font-light
                        outline-none
                        transition
                        ${formatPrice ? "pl-9" : "pl-4"}
                        ${errors[id] ? "border-rose-500" : "border-neutral-300"}
                        ${errors[id] ? "focus:border-rose-500" : "focus:border-neutral-500"}
                        `}
            />
            <label
                className={`
                            text-md 
                            absolute
                            top-5 
                            z-10 
                            origin-[0] 
                            -translate-y-3 
                            duration-150 
                            ${formatPrice ? "left-9" : "left-4"}
                            peer-placeholder-shown:translate-y-0 
                            peer-placeholder-shown:scale-100 
                            peer-focus:-translate-y-4
                            peer-focus:scale-75
                            ${errors[id] ? "text-rose-500" : "text-zinc-400"}
                        `}
            >
                {label}
            </label>
        </div>
    );
};
