import {Dispatch} from "react";
import axios from "axios";
import {PostAction, PostActionTypes} from "../../types/post";

export const fetchPosts = (userId: number | null) => async (dispatch: Dispatch<PostAction>) => {
    try {
        dispatch({type: PostActionTypes.FETCH_POST})
        if(userId) {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3&${userId ? `userId=${userId}` : ''}`)
            dispatch({type: PostActionTypes.FETCH_POST_SUCCESS, payload: response.data})
        }
    } catch (e) {
        dispatch({type: PostActionTypes.FETCH_POST_ERROR, payload: 'Something error'})
    }
}

export const clearPostAction = () => ({
    type: PostActionTypes.CLEAR_POST
})