import {combineReducers} from 'redux';
import UserReducer from './reducers-users';
import ActiveUserReducer from './reducers-active-user';

const allReducers = combineReducers({
	users: UserReducer,
	activeUser: ActiveUserReducer
});

export default allReducers;