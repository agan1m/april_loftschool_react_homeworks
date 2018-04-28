import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILER } from "../actions/search";

const initState = {
    isLoading: false,
    error: null,
    serials: []
}


const searchReducer = (state=initState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                serials: action.payload
            };
        case SEARCH_FAILER:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default searchReducer;