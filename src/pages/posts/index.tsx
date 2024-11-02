import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ConfirmModal } from "common-components";
import { RootState, AppDispatch } from "../../redux/store";
import { Header, List, CreateOrUpdateModal } from "./components";
import { toggleDeleteDialog } from "../../redux/slices/posts/slice";
import { fetchPosts, deletePost } from "../../redux/slices/posts/api";

const Posts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status, deleteModal, createOrUpdateModal } = useSelector((state: RootState) => state.posts);

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
                    onSubmitText="Yes"
                    open={deleteModal.visible}
                    text={`Delete ${deleteModal.items?.title}`}
                    onSubmitFn={() => dispatch(deletePost(deleteModal.items?.id)).then(() => {
                        dispatch(toggleDeleteDialog({ visible: false }))
                    })}
                    onClose={() => dispatch(toggleDeleteDialog({ visible: false }))}
                />
            }
            {createOrUpdateModal.visible && <CreateOrUpdateModal />}
        </Fragment>
    );
};
export default Posts;