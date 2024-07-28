import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as userReducer } from "./userReducer/reducer"
import { reducer as authReducer } from "./authReducer/reducer"

const rootReducer = combineReducers({
    userReducer,
    authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));