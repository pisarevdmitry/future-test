import * as types from "../actions/types"

export default (state = null, action) => {
    switch (action.type) {
        case types.FETCH_USERS:
            return {
                allUsers: action.payload,
                filtered: action.payload,
                current: null,
                sort:{}
            }
        case types.SERVER_ERROR:
            return 'error';
        case types.SHOW_USER :
            return {...state, current: action.payload};
        case types.LOADING_USERS:
                return action.payload;
        case types.SORTING_USERS:
            const {id, direction, result} = action.payload;
            return {...state, filtered : result, sort:{id,direction}}
        case types.FILTER_USERS :
            return {...state, filtered: action.payload }
        default:
            return state
    }
}