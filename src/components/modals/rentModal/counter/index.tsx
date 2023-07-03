"use client";

import { ICounter } from "./ICounter";

export const Counter: React.FC<ICounter.Props> = ({ title, subtitle, value, onChange }) => {
    const onAdd = () => {
        onChange(value + 1);
    };

    const onReduce = () => {
        if (value === 1) {
            return;
        }

        onChange(value - 1);
    };
    return <div>Counter</div>;
};
