import { combineReducers } from 'redux';
import userReducer from './userReducer'
import ajaxReducer from './ajaxReducer';

export  default combineReducers({
    users: userReducer,
    ajax: ajaxReducer
})