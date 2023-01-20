import axios from "axios";
import { GET_JEWELRY_FAILURE, GET_JEWELRY_REQUEST, GET_JEWELRY_SUCCESS } from "./actionType"


const getJewelryRequestAction = () => {

    return { type: GET_JEWELRY_REQUEST }
};


const getJewelrySuccessAction = (payload) => {
    return { type: GET_JEWELRY_SUCCESS, payload: payload }
};


const getJewelryErrorAction = () => {
    return { type: GET_JEWELRY_FAILURE }
}



export const getJewelry = (param)=> (dispatch) => {

    dispatch(getJewelryRequestAction());

    axios.get(`http://localhost:8080/Jewelry`,param).then((res)=>{
        console.log(res.data.Jewelry_Sets)
        dispatch(getJewelrySuccessAction(res.data.Jewelry_Sets))
    }).catch((err)=>{
        dispatch(getJewelryErrorAction());
    });
}