import {IPost, PostActionTypes} from "./post";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    posts: IPost[]
}

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: null | string;
    currentUserId: null | number
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    CHANGE_CURRENT_USER = "CHANGE_CURRENT_USER"
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;

}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: { users: IUser[], id: number }

}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

interface ChangeCurrentUserAction {
    type: UserActionTypes.CHANGE_CURRENT_USER;
    payload: number;
}


export type UserAction = FetchUserErrorAction
    | FetchUserSuccessAction
    | FetchUserAction
    | ChangeCurrentUserAction