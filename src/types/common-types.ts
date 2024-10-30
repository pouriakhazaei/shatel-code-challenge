export type CreateUpdateModal<T> = Partial<{
    items: T;
    visible: boolean;
    editMode: boolean;
}>;

export type OpenModal<T> = Partial<{
    items: T;
    visible: boolean;
}>;