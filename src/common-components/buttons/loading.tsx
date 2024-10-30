import { memo, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    loading?: boolean;
    loadingText?: string;
    classSpinnerIcon?: string;
};

function LoadingButton(props: Props) {
    const { text, loading, loadingText, className, classSpinnerIcon, ...rest } = props;

    const buttonProps = {
        ...rest,
        "aria-busy": loading || undefined
    };

    return (
        <button
            {...buttonProps}
            className={`${className || ""}`}
        >
            {loading ?
                <div className="flex items-center text-sm gap-2">
                    loading
                    {loadingText}
                </div>
                :
                text
            }
        </button>
    );
};
export default memo(LoadingButton);