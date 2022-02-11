import { UserAction, UserActionTypes } from "../types/user";
import { Dispatch } from "redux";
import axios from "../../system/axios";

export const fetchUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {

        try {
            const response = await axios.get('user');
            dispatch({
                type: UserActionTypes.FETCH_USER,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const response = await axios.get('user')
            setTimeout(() => {
                dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}