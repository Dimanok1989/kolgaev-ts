export interface AppState {
    loading: boolean;
    user: null | object;
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