import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionTypes";



const initialState = {
  user:{},
  isLoading: false,
  isError: false,
  isAuth:false
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
        user:payload
      }
    }


    case LOGIN_FAILURE:{
      return {
        ...state,
        isAuth:false,
        isLoading:true,
        user:{},

      }
    }
    case LOGOUT_REQUEST:{
      return {
        ...state,
        isLoading:true
      }
    }
    case LOGOUT_SUCCESS:{
      return {
        ...state,
        isAuth:false,
        isLoading:false,
        user:{}
      }
    }

    default:{
      return state
    }
  }
};

export { AuthReducer };
