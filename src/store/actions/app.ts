import axios from "../../system/axios";
import { AppAction, AppActionTypes } from "../types/app";
import { Dispatch } from "redux";

export const fetchApp = () => {

    return async (dispatch: Dispatch<AppAction>) => {

        dispatch({ type: AppActionTypes.FETCH_APP_START });

        try {
            const response = await axios.post('app');

            dispatch({
                type: AppActionTypes.FETCH_APP_START_SUCCESS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: AppActionTypes.FETCH_APP_START_SUCCESS,
                payload: null,
            });
        }
    }
}

export const fetchAppUserLogin = (data: object, success: any = null, error: any = null, done: any = null) => {

    return async (dispatch: Dispatch<AppAction>) => {

        try {
            const response = await axios.post('user/login', data);
            dispatch({ type: AppActionTypes.FETCH_APP_USER_LOGIN, payload: response.data });

            if (typeof success == "function")
                success(response.data);

        } catch (e: any) {
            dispatch({
                type: AppActionTypes.FETCH_CATCH,
                payload: { data: e, callback: error },
            });
        }

        if (typeof done == "function")
            done();
    }
}

export const fetchAppUserLogout = (success: any = null, error: any = null, done: any = null) => {

    return async (dispatch: Dispatch<AppAction>) => {

        try {
            await axios.post('user/logout');
            dispatch({ type: AppActionTypes.FETCH_APP_USER_LOGOUT });
        } catch (e: any) {
            dispatch({
                type: AppActionTypes.FETCH_CATCH,
                payload: { data: e, callbak: error },
            });
        }

        if (typeof done == "function")
            done();
    }
}
