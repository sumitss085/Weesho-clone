import { GET_JEWELRY_FAILURE, GET_JEWELRY_REQUEST, GET_JEWELRY_SUCCESS } from "./actionType";


const initialState = {
    jewelry_data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case GET_JEWELRY_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case GET_JEWELRY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jewelry_data: payload
            }

        case GET_JEWELRY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }


        default:
            return state
    }

}

 