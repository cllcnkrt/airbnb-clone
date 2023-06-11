"use client";

import Image from "next/image";
import { IAvatar } from "./IAvatar";

export const Avatar : React.FC<IAvatar.Props> = ({srcUrl}) => {
    return <Image className="rounded-full" src={srcUrl || "/images/placeholder.jpg"} alt="avatar" width={30} height={30} />;
};
