//Write the ActionCreator functions here
// import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionTypes"



export const loginRequest =()=>{
    return {type:LOGIN_REQUEST}
}

export const loginSuccess =(payload)=>{
    return {type:LOGIN_SUCCESS,payload:payload}
}

export const logoutRequest =()=>{
    return {type:LOGOUT_REQUEST}
}
export const logoutSuccess =()=>{
    return {type:LOGOUT_SUCCESS}
}

// export const loginuser =(user)=>(dispatch)=>{

//     dispatch(loginRequest())
//     return axios.post("https://reqres.in/api/login",user)
//         .then((res)=>dispatch(loginSuccess(res.data.token)))
//         .catch((err)=>dispatch(loginFailure()))
// }