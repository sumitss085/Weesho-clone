import * as types from "./saree.actionType"

const initialState={
    data:[],
    isLoading:false,
    isError:false
}

export const sareeReducer = (state=initialState,{type,payload})=>{
    // const{type,payload}=action;
    switch(type){
        case types.GET_SAREE_REQUEST:
            return {...state,isLoading:true}
        
        case types.GET_SAREE_SUCCESS:
            return {...state,isLoading:false,data:payload}
            
        case types.GET_SAREE_ERROR:
            return {...state,isLoading:false,isError:true}   
        default:
            return state;    
    }
}