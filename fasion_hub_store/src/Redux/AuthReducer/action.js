import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"



export const loginRequest =()=>{
    return {type:LOGIN_REQUEST}
}

export const loginSuccess =(payload)=>{
    return {type:LOGIN_SUCCESS,payload:payload}
}

export const loginFailure =()=>{
    return {type:LOGIN_FAILURE}
}

// export const loginuser =(user)=>(dispatch)=>{

//     dispatch(loginRequest())
//     return axios.post("https://reqres.in/api/login",user)
//         .then((res)=>dispatch(loginSuccess(res.data.token)))
//         .catch((err)=>dispatch(loginFailure()))
// }