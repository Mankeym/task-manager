import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./AuthReducer/AuthReducer";

const rootReducers = combineReducers({
    AuthReducer
})

export const store = createStore(rootReducers,applyMiddleware(thunk))
