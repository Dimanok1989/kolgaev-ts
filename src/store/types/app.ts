export interface AppState {
    loading: boolean;
    user: null | UserTypes;
}

export interface UserTypes {
    created_at: string;
    email: string;
    email_verified_at: null | string;
    id: number;
    name: string;
    updated_at: string;
}

export enum AppActionTypes {
    FETCH_CATCH = 'FETCH_CATCH',
    FETCH_APP_START = 'FETCH_APP_START',
    FETCH_APP_START_SUCCESS = 'FETCH_APP_START_SUCCESS',
    FETCH_APP_USER_LOGOUT = 'FETCH_APP_USER_LOGOUT',
}

interface FetchCatch {
    type: AppActionTypes.FETCH_CATCH;
    payload: any;
}

interface FetchAppAction {
    type: AppActionTypes.FETCH_APP_START;
}

interface FetchAppActionSuccess {
    type: AppActionTypes.FETCH_APP_START_SUCCESS;
    payload: null | object;
}

interface FetchAppUserLogoutAction {
    type: AppActionTypes.FETCH_APP_USER_LOGOUT;
}

export type AppAction = FetchCatch
    | FetchAppAction
    | FetchAppActionSuccess
    | FetchAppUserLogoutAction