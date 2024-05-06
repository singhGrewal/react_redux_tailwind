import { combineReducers } from 'redux';
import todoReducer from "./counterReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    // Add other reducers here if you have more
});

export default rootReducer;
