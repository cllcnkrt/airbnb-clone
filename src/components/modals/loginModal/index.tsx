"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Heading, Input } from "@/components";
import { useLoginModalStore, useRegisterModalStore } from "@/hooks";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { Modal } from "../modal";

export const LoginModal: React.FC = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const loginModalStore = useLoginModalStore();
    const registerModalStore = useRegisterModalStore();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);

        signIn("credentials", {
            ...data,
            redirect: false,
        }).then((response) => {
            setIsLoading(false);

            if (response?.ok) {
                toast.success("Logged in successfully");
                router.refresh();
                loginModalStore.onClose();
            }

            if (response?.error) {
                toast.error(response.error);
            }
        });
    };

    const toggle = useCallback(() => {
        loginModalStore.onClose();
        registerModalStore.onOpen();
    }, [loginModalStore, registerModalStore]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome back Airbnb" subtitle="Login to your account" />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
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
        <div className="mt-3 flex flex-col gap-4">
            <hr />
            <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => signIn("google")} />
            <Button outline label="Continue with Github" icon={AiFillGithub} onClick={() => signIn("github")} />
            <div className="mt-4 text-center font-light text-neutral-500">
                <div className="flex items-center justify-center gap-2">
                    <div>First time using Airbnb?</div>
                    <div className="cursor-pointer text-neutral-800 hover:underline" onClick={toggle}>
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModalStore.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModalStore.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};
