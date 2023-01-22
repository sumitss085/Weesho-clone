import {  ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "./Cart.actionType"


const initialState={
    CartData:[],
    isLoading:false,
    isError:false
}

export const CartReducer = (state=initialState,{type,payload})=>{
  
    switch(type){
        case ADD_PRODUCT_REQUEST:{

            return {
                ...state,
                isLoading:true
            }
        }
        
        case ADD_PRODUCT_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                CartData:[...state.CartData,payload]
            }
        }
           
            
        case ADD_PRODUCT_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
               
        default:
            return state;    
    }
}