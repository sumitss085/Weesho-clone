import * as types from "./Product.actionType"

const initialState={
    productData:[],
    isLoading:false,
    isError:false
}

export const ProductReducer = (state=initialState,{type,payload})=>{
    // const{type,payload}=action;
    switch(type){
        case types.GET_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        
        case types.GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,productData:payload}
            
        case types.GET_PRODUCT_ERROR:
            return {...state,isLoading:false,isError:true}   
        default:
            return state;    
    }
}