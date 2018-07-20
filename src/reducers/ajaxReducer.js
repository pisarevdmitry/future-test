import * as types from "../actions/types"

export default (state = 'waiting', action) => {
    switch (action.type) {
        case types.FETCH_USERS:
            return true
        case types.SERVER_ERROR:
            return false;
        case types.LOADING_USERS:
            return null;
        default:
            return state
    }
}