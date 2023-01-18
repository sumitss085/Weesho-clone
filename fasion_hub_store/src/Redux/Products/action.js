import * as types from "./actionType"
import axios from "axios"

export const getProductData = ()=> (dispatch)=>
{
    dispatch({type: types.GET_PRODUCT_REQUEST})
    return axios
        .get("http://localhost:8080/products")
        .then(res=>{
            dispatch({type: types.GET_PRODUCT_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
        .catch(err=>dispatch({type: types.GET_PRODUCT_ERROR}))
};

