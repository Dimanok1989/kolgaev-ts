import { AppAction, AppActionTypes, AppState } from "../types/app";
import { useError } from "../../hooks/useError";
import { useNotification } from "../../hooks/useNotification";

const initialState: AppState = {
    loading: true,
    user: null,
}

const Notification = (data: any) => {
    const { message } = useError(data);
    const noty = useNotification();
    noty("error", { message: message });
}

const ErrorMessage = (data: any) => {
    const { message } = useError(data);
    return message;
}

export const appReducer = (state = initialState, action: AppAction): AppState => {

    switch (action.type) {

        case AppActionTypes.FETCH_CATCH:

            if (typeof action.payload.callback == "function") {
                action.payload.callback(action.payload.data, ErrorMessage(action.payload.data));
            } else {
                Notification(action.payload.data);
            }

            return { ...state }

        case AppActionTypes.FETCH_APP_START:
            return { ...state, loading: true, user: null }

        case AppActionTypes.FETCH_APP_START_SUCCESS:
            return { ...state, loading: false, ...(action.payload ? action.payload : {}) }

        case AppActionTypes.FETCH_APP_USER_LOGIN:
            localStorage.setItem('k_access_token', action.payload?.token || null);
            return { ...state, loading: false, ...(action.payload ? action.payload : {}) }

        case AppActionTypes.FETCH_APP_USER_LOGOUT:
            return { ...state, user: null }

        default:
            return { ...state };
    }
}