"use client";

import { useMemo, useState } from "react";
import { Heading } from "@/components";
import { categoriesData } from "@/data";
import { STEPS } from "@/enums";
import { useRentModalStore } from "@/hooks";

import { Modal } from "../modal";

export const RentModal = () => {
    const rentModalStore = useRentModalStore();

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
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );

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
