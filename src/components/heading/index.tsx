import { IHeading } from "./IHeading";

export const Heading: React.FC<IHeading.Props> = ({ title, subtitle, center }) => {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <div className="text-2xl font-bold">{title}</div>
            <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
        </div>
    );
};
