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
    FETCH_APP_START = 'FETCH_APP_START',
    FETCH_APP_START_SUCCESS = 'FETCH_APP_START_SUCCESS',
}

interface FetchAppAction {
    type: AppActionTypes.FETCH_APP_START;
}

interface FetchAppActionSuccess {
    type: AppActionTypes.FETCH_APP_START_SUCCESS;
    payload: null | object;
}

export type AppAction = FetchAppAction
    | FetchAppActionSuccess