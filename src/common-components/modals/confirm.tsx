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
        <BaseModal open={props.open} onClose={props.onClose} classNames={{ modal: "!rounded-2xl" }}>
            <div className="text-center">
                <h3 className="font-semibold text-red-600 text-wrap">
                    {props.text} ?
                </h3>
                <p className="text-sm text-gray-500 mt-3">
                    Are you sure about the deletion?
                </p>
                <div className="grid grid-cols-12">
                    <div className="grid grid-cols-12 gap-3 p-4">
                        <div className="col-span-6">
                            <button onClick={props.onClose} className="text-red-600 w-full h-10 flex items-center justify-center font-semibold text-sm">
                                Cancel
                            </button>
                        </div>
                        <div className="col-span-6">
                            <LoadingButton
                                onClick={props.onSubmitFn}
                                loading={props.onSubmitLoading}
                                text={props.onSubmitText || "Submit"}
                                className="bg-blue-600 text-white w-full rounded-xl h-10 flex items-center justify-center font-semibold text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
};