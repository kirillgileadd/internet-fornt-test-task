import {IUser, UserAction, UserActionTypes, UserState} from "../../types/user";
import {PostActionTypes} from "../../types/post";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    currentUserId: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS: {
            return {
                ...state,
                loading: true,
            }
        }
        case UserActionTypes.FETCH_USERS_SUCCESS: {
            const id = action.payload.id
            const currentUsers: IUser[] = action.payload.users.sort(function (x, y) {
                return x.id == id ? -1 : y.id == id ? 1 : 0;
            });
            return {
                ...state,
                users: currentUsers,
                loading: false
            }
        }
        case UserActionTypes.FETCH_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        case UserActionTypes.CHANGE_CURRENT_USER: {
            return {
                ...state,
                currentUserId: action.payload
            }
        }
        default: {
            return state
        }
    }
}