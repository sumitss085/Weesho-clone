import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";



const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const AuthReducer = (state = initialState,{type,payload}) => {
 
  switch(type){
    
    case LOGIN_REQUEST:{
      return {
        ...state,
        isLoading:true
      }
    }

    case LOGIN_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        isAuth:true,
        token:payload
      }
    }


    case LOGIN_FAILURE:{
      return {
        ...state,
        isError:true
      }
    }

    default:{
      return state
    }
  }
};

export { AuthReducer };
