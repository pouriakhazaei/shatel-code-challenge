import { memo } from "react";
import { useDispatch } from "react-redux";

import { PostResponse } from "types/posts";
import { AppDispatch } from "../../../redux/store";
import { toggleDeleteDialog, toggleCreateOrUpdateModal } from "../../../redux/slices/posts/slice";

const ListItems = (props: PostResponse) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleUpdatePost = () => {
        dispatch(toggleCreateOrUpdateModal({ visible: true, editMode: true, items: props }));
    };

    const handleDeletePost = () => {
        dispatch(toggleDeleteDialog({ visible: true, items: props }));
    };

    return (
        <li className="border border-gray-200 p-4 mb-2 flex flex-col md:flex-row justify-between items-center gap-2 bg-white rounded">
            <span>
                {props.title}
            </span>
            <div className="flex items-center gap-1 w-full md:w-fit">
                <button
                    className="bg-blue-500 text-white p-2 rounded mr-2 w-full transition-all hover:opacity-90"
                    onClick={handleUpdatePost}
                >
                    Edit
                </button>
                <button
                    className="border border-red-600 text-red-600 p-2 rounded transition-all hover:bg-red-600 hover:text-white"
                    onClick={handleDeletePost}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};
export default memo(ListItems);