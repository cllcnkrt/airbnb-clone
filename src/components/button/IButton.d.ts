import { IconType } from "react-icons/lib";

export declare module IButton {
    // eslint-disable-next-line no-unused-vars
    interface Props {
        label: string;
        // eslint-disable-next-line no-unused-vars
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
        disabled?: boolean;
        outline?: boolean;
        small?: boolean;
        icon?: IconType;
    }
}
