
import axios from "axios"
import * as types from "./saree.actionType";

export const getProductData = ()=> (dispatch)=>
{
    dispatch({type: types.GET_SAREE_REQUEST})
    return axios
        .get("http://localhost:8080/sarees")
        .then(res=>{
            dispatch({type: types.GET_SAREE_SUCCESS, payload: res.data})
            console.log(res.data)
        })
        .catch(err=>dispatch({type: types.GET_SAREE_ERROR}))
};

getProductData()