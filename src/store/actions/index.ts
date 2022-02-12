import * as AppActionCreators from "./app";
import * as UserActionCreators from "./user";

export const actions = {
    ...AppActionCreators,
    ...UserActionCreators
}

export default actions;