import { IconType } from "react-icons/lib";

export declare module IButton {
    interface Props {
        label: string;
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
        disabled?: boolean;
        outline?: boolean;
        small?: boolean;
        icon?: IconType;
    }
}
