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
