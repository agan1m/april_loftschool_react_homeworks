import { SHOW_REQUEST, SHOW_SUCCESS, SHOW_FAILER } from "../actions/show";

const initState = {
    isLoading: false,
    error: null,
    serials: []
}


const showReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case SHOW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                serials: action.payload
            };
        case SHOW_FAILER:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default showReducer;