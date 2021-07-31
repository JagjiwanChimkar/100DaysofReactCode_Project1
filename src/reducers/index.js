import { combineReducers } from "redux";
import users from './userReducer';
import stat from './statReducer';

export default combineReducers({users:users,stat:stat});