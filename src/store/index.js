import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerManageNews} from "./reducerManageNews";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducerManageComments} from "./reducerManageComments";
import {reducerManageActive} from "./reducerManageActive";


const rootReducer = combineReducers({

    managerNews: reducerManageNews,
    managerComments: reducerManageComments,
    // manageActive: reducerManageActive,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))