import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Header, List } from "./components";
import { ConfirmModal } from "common-components";
import { fetchPosts } from "../../redux/slices/posts/api";
import { RootState, AppDispatch } from "../../redux/store";
import { toggleDeleteDialog } from "../../redux/slices/posts/slice";

const Posts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status, deleteModal } = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
        };
    }, [status, dispatch]);

    return (
        <Fragment>
            <Header />
            <List />
            {deleteModal.visible &&
                <ConfirmModal
                    text={""}
                    onClose={() => { }}
                    onSubmitFn={() => { }}
                    open={deleteModal.visible}
                />
            }
        </Fragment>
    );
};
export default Posts;