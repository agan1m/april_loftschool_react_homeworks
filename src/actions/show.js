

export const SHOW_REQUEST = 'SHOW_REQUEST';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const SHOW_FAILER = 'SHOW_FAILER';


export const showRequest = (query) => ({
    type: SHOW_REQUEST,
    payload: query
});


export const showSuccess = (query) => ({
    type: SHOW_SUCCESS,
    payload: query
});

export const showFailer = (error) => ({
    type: SHOW_FAILER,
    error
});