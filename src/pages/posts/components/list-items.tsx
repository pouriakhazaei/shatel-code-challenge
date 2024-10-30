import { memo } from "react";

import { useDispatch } from "react-redux";

import { PostResponse } from "types/posts";
import { AppDispatch } from "../../../redux/store";

const ListItems = ({ id, body, title, userId }: PostResponse) => {
    const dispatch = useDispatch<AppDispatch>();
    // const posts = useSelector((state: RootState) => state.posts.items);
    // const postStatus = useSelector((state: RootState) => state.posts.status);
    // const [newTitle, setNewTitle] = useState("");
    // const [currentPost, setCurrentPost] = useState<{ id: number; title: string; body: string } | null>(null);


    const handleUpdatePost = () => {
        // setCurrentPost(post);
        // setNewTitle(post.title);
    };


    const handleDeletePost = () => {
        // dispatch(deletePost(postId));
    };

    return (
        <li className="border border-gray-200 p-4 mb-2 flex flex-col md:flex-row justify-between items-center gap-2 bg-white rounded">
            <span>
                {title}
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