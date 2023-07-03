import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";

import { IImageUpload } from "./IImageUpload";

const uploadPreset = "kj2oqetb";

declare global {
    var cloudinary: any;
}
export const ImageUpload: React.FC<IImageUpload.Props> = ({ onChange, value }) => {
    const handleUpload = (result: any) => {
        onChange(result.info.secure_url);
    };
    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset={uploadPreset}
            options={{
                maxFiles: 1,
            }}>
            {({ open }) => {
                return (
                    <div
                        onClick={() => open?.()}
                        className="
                              relative
                              flex
                              cursor-pointer
                              flex-col
                              items-center 
                              justify-center 
                              gap-4 
                              border-2
                              border-dashed
                              border-neutral-300
                              p-20
                              text-neutral-600
                              transition
                              hover:opacity-70
                            ">
                        <TbPhotoPlus size={50} />
                        <div className="text-lg font-semibold">Click to upload</div>
                        {value && (
                            <div
                                className="
                                          absolute inset-0 h-full w-full">
                                <Image fill style={{ objectFit: "cover" }} src={value} alt="House" />
                            </div>
                        )}
                    </div>
                );
            }}
        </CldUploadWidget>
    );
};
