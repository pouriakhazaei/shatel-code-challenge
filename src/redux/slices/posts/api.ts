import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "configs/api-config";
import { PostResponse } from "types/posts";

export const fetchPosts = createAsyncThunk<PostResponse[]>("posts/fetchPosts", async () => {
    const response = await axios.get("posts");
    return response.data;
});

export const createPost = createAsyncThunk<PostResponse, PostResponse>("posts/createPost", async (newPost) => {
    const response = await axios.post("posts", newPost);
    return response.data;
});

export const updatePost = createAsyncThunk<PostResponse, PostResponse>("posts/updatePost", async (updatedPost) => {
    const response = await axios.put(`posts/${updatedPost.id}`, updatedPost);
    return response.data;
});

export const deletePost = createAsyncThunk<number, number>("posts/deletePost", async (postId: number) => {
    await axios.delete(`posts/${postId}`);
    return postId;
});