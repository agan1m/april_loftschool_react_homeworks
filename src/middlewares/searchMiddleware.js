import { searchSuccess } from "../actions/search";
import { search } from "../api";


 const searchMiddleware = store => next => action => {
     if (action.type ==='SEARCH_REQUEST') {
        search(action.payload)
        .then(series => {
            store.dispatch(searchSuccess(series))
        })
    }
    return next(action)
}

export default searchMiddleware;