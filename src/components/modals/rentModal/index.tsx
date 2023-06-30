"use client";

import { useMemo, useState } from "react";
import { Heading } from "@/components";
import { categoriesData } from "@/data";
import { STEPS } from "@/enums";
import { useRentModalStore } from "@/hooks";
import { FieldValues, useForm } from "react-hook-form";

import { Modal } from "../modal";
import { CategoryInput } from "./categoryInput";
import { CountrySelect } from "./countrySelect";

export const RentModal = () => {
    const rentModalStore = useRentModalStore();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category: "",
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: "",
            price: 1,
            title: "",
            description: "",
        },
    });

    const category = watch("category");
    const location = watch("location");

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const [step, setStep] = useState(STEPS.CATEGORY);

    const onBack = () => {
        setStep((prev) => prev - 1);
    };

    const onNext = () => {
        setStep((prev) => prev + 1);
    };

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return "Create";
        }

        return "Next";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return "Back";
    }, [step]);

    let bodyContent = (
        <div>
            <Heading title="Which of these best decribes your place?" subtitle="Pick a category" />
            <div className="grid max-h-[50vh] grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
                {categoriesData.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput
                            icon={item.icon}
                            label={item.label}
                            selected={category === item.label}
                            onClick={(category) => {
                                setCustomValue("category", category);
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading title="Where is your place located?" subtitle="Help guests find you!" />
                <CountrySelect value={location} onChange={(value) => setCustomValue("location", value)} />
            </div>
        );
    }

    return (
        <Modal
            isOpen={rentModalStore.isOpen}
            onClose={rentModalStore.onClose}
            title="Airbnb your home"
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            onSubmit={onNext}
            body={bodyContent}
        />
    );
};
