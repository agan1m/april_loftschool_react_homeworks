

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILER = 'SEARCH_FAILER';


export const searchRequest = (query) => ({
    type: SEARCH_REQUEST,
    payload: query
});


export const searchSuccess = (query) => ({
    type: SEARCH_SUCCESS,
    payload: query
});

export const searchFailer = (error) => ({
    type: SEARCH_FAILER,
    error
});
