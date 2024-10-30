import { useSelector } from "react-redux";

import ListItems from "./list-items";
import { PostResponse } from "types/posts";
import { RootState } from "../../../redux/store";

const List = () => {
    const posts = useSelector((state: RootState) => state.posts.items);
    return (
        <ul>
            {posts.map((post: PostResponse) => (
                <ListItems
                    key={post.id}
                    {...post}
                />
            ))}
        </ul>
    );
};
export default List;