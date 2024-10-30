import { BaseModal, LoadingButton } from "../";

type Props = {
    open: boolean;
    text: string;
    onClose: () => void;
    onSubmitText?: string;
    onSubmitFn: () => void;
    onSubmitLoading?: boolean;
};

export default function ConfirmModal(props: Props) {
    return (
        <BaseModal open={props.open} onClose={props.onClose} classNames={{ modal: "!p-0 !rounded-2xl min-w-[90%] md:min-w-[60%]" }}>
            <div className="min-w-[95%] md:min-w-[600px] grid grid-cols-12">
                <h3 className="font-semibold text-red-600">
                    {props.text}
                </h3>
                <span className="text-sm text-gray-500">
                    آیا از حذف مطمعن هستید
                </span>
                <div className="col-span-12 md:col-span-6">
                    <div className="grid grid-cols-12 gap-3 p-4">
                        <div className="col-span-6">
                            <button onClick={props.onClose} className="text-primary-main w-full h-10 flex items-center justify-center font-semibold text-sm">
                                انصراف
                            </button>
                        </div>
                        <div className="col-span-6">
                            <LoadingButton
                                onClick={props.onSubmitFn}
                                loading={props.onSubmitLoading}
                                text={`${props.onSubmitText} || ذخیره`}
                                className="bg-primary-main text-white w-full rounded-xl h-10 flex items-center justify-center font-semibold text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
};