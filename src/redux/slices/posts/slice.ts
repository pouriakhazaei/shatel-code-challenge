import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostResponse, PostStates } from "types/posts";
import { CreateUpdateModal, OpenModal } from "types/common-types";
import { fetchPosts, createPost, updatePost, deletePost } from "./api";

const initialState: PostStates = {
    items: [],
    error: null,
    status: "idle",
    deleteModal: {},
    createOrUpdateModal: {},
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        toggleDeleteDialog: (state, action: PayloadAction<OpenModal<PostResponse>>) => {
            state.deleteModal = action.payload;
        },
        toggleCreateOrUpdateModal: (state, action: PayloadAction<CreateUpdateModal<PostResponse>>) => {
            state.createOrUpdateModal = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostResponse[]>) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch posts";
            })
            .addCase(createPost.fulfilled, (state, action: PayloadAction<PostResponse>) => {
                state.items.push(action.payload);
            })
            .addCase(updatePost.fulfilled, (state, action: PayloadAction<PostResponse>) => {
                const index = state.items.findIndex((post) => post.id === action.payload.id);
                if (index >= 0) state.items[index] = action.payload;
            })
            .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
                state.items = state.items.filter((post) => post.id !== action.payload);
            });
    }
});
export const {
    toggleDeleteDialog,
    toggleCreateOrUpdateModal
} = postsSlice.actions;
export default postsSlice.reducer;