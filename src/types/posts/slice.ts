import { PostResponse } from "./api";
import { OpenModal, CreateUpdateModal } from "types/common-types";

export type Status = "idle" | "loading" | "succeeded" | "failed";

export interface PostStates {
    status: Status;
    error: string | null;
    items: PostResponse[];
    deleteModal: OpenModal<PostResponse>;
    createOrUpdateModal: CreateUpdateModal<PostResponse>;
};