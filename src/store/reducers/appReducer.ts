import { AppAction, AppActionTypes, AppState } from "../types/app";

const initialState: AppState = {
    loading: true,
    user: null,
}

export const appReducer = (state = initialState, action: AppAction): AppState => {

    switch (action.type) {

        case AppActionTypes.FETCH_APP_START:
            return { ...state, loading: true, user: null }

        case AppActionTypes.FETCH_APP_START_SUCCESS:
            return { ...state, loading: false, ...(action.payload ? action.payload : {}) }

        default:
            return { ...state };
    }
}