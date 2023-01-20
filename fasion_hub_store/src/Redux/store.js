


import {  applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux"
import {sareeReducer} from "./WomensProducts/saree.reducer"
import { AuthReducer } from "./AuthReducer/AuthReducer"; 

const rootReducer =combineReducers({AuthReducer,sareeReducer})

export const store =legacy_createStore(rootReducer,applyMiddleware (thunk))













