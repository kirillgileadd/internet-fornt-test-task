export interface IPost {
    id: number;
    userId: null | number;
    title: string;
    body: string;
}

export interface PostState {
    posts: IPost[];
    userId: null | number;
    loading: boolean;
    error: null | string;
}

export enum PostActionTypes {
    FETCH_POST = "FETCH_POST",
    FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
    FETCH_POST_ERROR = "FETCH_POST_ERROR",
    CHANGE_CURRENT_USER = "CHANGE_CURRENT_USER"
}

interface FetchPostAction {
    type: PostActionTypes.FETCH_POST;

}

interface FetchPostSuccessAction {
    type: PostActionTypes.FETCH_POST_SUCCESS;
    payload: IPost[]

}

interface FetchPostErrorAction {
    type: PostActionTypes.FETCH_POST_ERROR;
    payload: string;
}

interface ChangeCurrentUser {
    type: PostActionTypes.CHANGE_CURRENT_USER;
    payload: number;
}

export type PostAction = FetchPostErrorAction | FetchPostSuccessAction | FetchPostAction | ChangeCurrentUser