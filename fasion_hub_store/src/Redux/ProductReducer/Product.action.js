
import axios from "axios"
import * as types from "./Product.actionType";

export const getProductData = (query)=> (dispatch)=>
{
    dispatch({type: types.GET_PRODUCT_REQUEST})
    return axios
        .get(`http://localhost:8080/${query}`)
        .then(res=>{
            dispatch({type: types.GET_PRODUCT_SUCCESS, payload: res.data})
            
        })
        .catch(err=>dispatch({type: types.GET_PRODUCT_ERROR}))
};
