import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "../../../redux/store";
import { createPost, updatePost } from "../../../redux/slices/posts/api";
import { toggleCreateOrUpdateModal } from "../../../redux/slices/posts/slice";
import { BaseModal, LoadingButton, SimpleTextArea } from "../../../common-components";

export default function CreateOrUpdateModal() {
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState<string>("");
    const { createOrUpdateModal } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        if (createOrUpdateModal.editMode) {
            setTitle(createOrUpdateModal.items?.title ?? "");
        };
    }, [createOrUpdateModal.visible]);

    const onSubmit = () => {
        if (createOrUpdateModal.editMode) {
            dispatch(updatePost({ title, body: "New Post Body", id: createOrUpdateModal.items?.id }));
            onClose();
        } else {
            dispatch(createPost({ title, body: "New Post Body" }));
            onClose();
        };
    };

    const onClose = () => dispatch(toggleCreateOrUpdateModal({ visible: false }));

    return (
        <BaseModal open={createOrUpdateModal.visible} onClose={onClose} classNames={{ modal: "!rounded-2xl" }}>
            <div>
                <h3 className="font-semibold my-2 text-2xl">
                    {`${createOrUpdateModal.editMode ? "Update post" : "Create post"}`}
                </h3>
                <SimpleTextArea
                    value={title}
                    placeholder=""
                    onChange={e => setTitle(e.target.value)}
                />
                <div className="grid grid-cols-12">
                    <div className="grid grid-cols-12 gap-3 p-4">
                        <div className="col-span-6">
                            <button onClick={onClose} className="text-red-600 w-full h-10 flex items-center justify-center font-semibold text-sm">
                                Cancel
                            </button>
                        </div>
                        <div className="col-span-6">
                            <LoadingButton
                                text="Submit"
                                onClick={onSubmit}
                                className="bg-blue-600 text-white w-full rounded-xl h-10 flex items-center justify-center font-semibold text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
};