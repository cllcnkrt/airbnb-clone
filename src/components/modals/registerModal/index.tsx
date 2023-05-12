"use client";

import { useState, useCallback } from "react";

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRegisterModalStore } from "@/hooks";
import { Modal } from "../";
import { Button, Heading, Input } from "@/components";
import { toast } from "react-hot-toast";

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
                .catch((err) => {
                    toast.error("something went wrong");
                })
                .finally(() => setIsLoading(false));
        },

        [],
    );

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to Airbnb" subtitle="Create an account?" />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => {}} />
            <Button outline label="Continue with Github" icon={AiFillGithub} onClick={() => {}} />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="flex justify-center items-center gap-2">
                    <div>Already have an account?</div>
                    <div className="text-neutral-800 cursor-pointer hover:underline">Log in</div>
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModalStore.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModalStore.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};
