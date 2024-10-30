import { useSelector } from "react-redux";

import ListItems from "./list-items";
import { PostResponse } from "types/posts";
import { RootState } from "../../../redux/store";

const List = () => {
    const { items, searchTerm } = useSelector((state: RootState) => state.posts);

    const filteredItems = items.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <ul>
            {filteredItems.map((post: PostResponse) => (
                <ListItems
                    key={post.id}
                    {...post}
                />
            ))}
        </ul>
    );
};
export default List;