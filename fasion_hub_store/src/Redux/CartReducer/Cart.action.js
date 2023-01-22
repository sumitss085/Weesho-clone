import axios from "axios"
import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAILURE } from "./Cart.actionType"

export const AddtocartRequest =()=>{
    return {type:ADD_PRODUCT_REQUEST}

}

export const AddtocartSuccess =(payload)=>{
    return {type:ADD_PRODUCT_SUCCESS,payload:payload}
}

export const AddtocartFailure =()=>{
    return {type:ADD_PRODUCT_FAILURE}
}

export const AddProducttoCart =(product)=>(dispatch)=>{
    dispatch({type:ADD_PRODUCT_REQUEST})

    return axios.post('http://localhost:8080/MyCartList',product)
    .then((res)=>dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data}))
    .catch(err=>dispatch({type:ADD_PRODUCT_FAILURE}))

}

