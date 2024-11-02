import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../redux/store";
import { setSearchTerm, toggleCreateOrUpdateModal } from "../../../redux/slices/posts/slice";

const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { searchTerm } = useSelector((state: RootState) => state.posts);

    const handleCreatePost = () => {
        dispatch(toggleCreateOrUpdateModal({ visible: true }));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        dispatch(setSearchTerm(searchValue));
    };

    return (
        <div className="bg-white rounded p-4 mb-4 border border-gray-200">
            <h1 className="text-2xl font-bold mb-4">
                Shatel code challenge
            </h1>
            <div className="grid grid-cols-12 gap-2 md:gap-4">
                <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                    <input
                        type="text"
                        value={searchTerm}
                        placeholder="Search by title"
                        onChange={handleSearchChange}
                        className="border p-2 rounded w-full outline-none transition-all hover:border-blue-600"
                    />
                </div>
                <div className="col-span-12 md:col-span-2 order-1 md:order-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded transition-all hover:opacity-90" onClick={handleCreatePost}>
                        Create Post
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Header;