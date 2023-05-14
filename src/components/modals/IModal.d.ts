export declare module IModal {
    // eslint-disable-next-line no-unused-vars
    interface Props {
        isOpen?: boolean;
        onClose: () => void;
        onSubmit: () => void;
        title?: string;
        body?: React.ReactElement;
        footer?: React.ReactElement;
        actionLabel: string;
        disabled?: boolean;
        secondaryAction?: () => void;
        secondaryActionLabel?: string;
    }
}
