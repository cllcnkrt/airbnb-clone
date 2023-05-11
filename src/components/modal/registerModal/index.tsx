import { useState, useCallback } from "react";

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRegisterModalStore } from "@/hooks";
import { Modal } from "../";

export const RegisterModal: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });
    const registerModalStore = useRegisterModalStore();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<FieldValues> = useCallback(
        async (data) => {
            setIsLoading(true);
            await axios
                .post("http://localhost:4000/api/auth/register", data)
                .then((res) => {
                    console.log(res);
                    registerModalStore.onClose();
                })
                .catch((err) => err)
                .finally(() => setIsLoading(false));
        },

        [],
    );

    const bodyContent = <div className="flex flex-col gap-4">sadas</div>;

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModalStore.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModalStore.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
};
