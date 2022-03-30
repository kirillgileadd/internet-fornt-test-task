import {PostAction, PostActionTypes, PostState} from "../../types/post";

const initialState: PostState = {
    posts: [],
    userId: null,
    loading: false,
    error: null
}

export const postReducer = (state =initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POST: {
            return {
                ...state,
                loading: true,
            }
        }
        case PostActionTypes.FETCH_POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        }
        case PostActionTypes.FETCH_POST_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        case PostActionTypes.CHANGE_CURRENT_USER: {
            return {
                ...state,
                userId: action.payload
            }
        }
        default: {
            return state
        }
    }
}