import {IPost} from "./post";

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
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;

}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: IUser[]

}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

export type UserAction = FetchUserErrorAction | FetchUserSuccessAction | FetchUserAction