"use client";

import { memo, forwardRef, InputHTMLAttributes, Ref } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
};

const SimpleTextInput = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
    const { errorMessage, ...others } = props;
    return (
        <>
            <input
                ref={ref}
                {...others}
                placeholder={`${errorMessage ? errorMessage : props.placeholder}`}
                className={`rounded-2xl border h-14 w-full bg-white outline-neutral-400 px-2 font-semibold
                ${errorMessage
                        ? "border-error-main placeholder:text-error-main outline-error-main focus:outline-error-main text-xs"
                        : "border-[#A2A2A22B] focus:outline-primary-main hover:border-primary-main placeholder:text-neutral-400 text-sm"
                    } ${props.className || ""}
                `}
            />
        </>
    );
});
export default memo(SimpleTextInput);