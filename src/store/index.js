import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerManageNews} from "./reducerManageNews";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducerManageComments} from "./reducerManageComments";


const rootReducer = combineReducers({
    managerNews: reducerManageNews,
    managerComments: reducerManageComments,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))