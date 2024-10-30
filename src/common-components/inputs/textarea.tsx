"use client";

import { memo, forwardRef, TextareaHTMLAttributes, Ref } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    errorMessage?: string;
};

const SimpleTextArea = forwardRef((props: Props, ref: Ref<HTMLTextAreaElement>) => {
    const { errorMessage, ...others } = props;
    return (
        <>
            <textarea
                ref={ref}
                rows={6}
                {...others}
                placeholder={`${errorMessage ? errorMessage : props.placeholder}`}
                className={`rounded-2xl border w-full outline-neutral-400 p-2 text-sm font-semibold
                ${errorMessage
                        ? "border-error-main placeholder:!text-error-main outline-error-main focus:outline-error-main text-xs"
                        : "border-[#A2A2A22B] focus:outline-primary-main hover:border-primary-main placeholder:!text-neutral-400"
                    } ${props.className || ""}
                `}
            />
        </>
    );
});
export default memo(SimpleTextArea);