


import {  applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux"
import {sareeReducer} from "./WomensProducts/saree.reducer"
import { AuthReducer } from "./AuthReducer/AuthReducer"; 
import { reducer as JewelryReducer } from "./Jewelry/reducer";


const rootReducer =combineReducers({JewelryReducer,AuthReducer,sareeReducer})

export const store =legacy_createStore(rootReducer,applyMiddleware (thunk))













