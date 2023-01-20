


import {  applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux"

import { AuthReducer } from "./AuthReducer/AuthReducer"; 

import { ProductReducer } from "./ProductReducer/Product.reducer";

const rootReducer =combineReducers({AuthReducer,ProductReducer})


export const store =legacy_createStore(rootReducer,applyMiddleware (thunk))













