import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "react";
import axios from "axios";

export const fetchUsers = (id: number) => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.FETCH_USERS})
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: {users: response.data, id}})
    } catch (e) {
        dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Something error'})
    }
}

export const changeCurrentUser = (id: number) => (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.CHANGE_CURRENT_USER, payload: id})
}