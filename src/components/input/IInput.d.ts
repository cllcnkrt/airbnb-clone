import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export declare module IInput {
    interface Props {
        id: string;
        label: string;
        type?: string;
        disabled?: boolean;
        formatPrice?: boolean;
        required?: boolean;
        register: UseFormRegister<FieldValues>;
        errors: FieldErrors;
    }
}
