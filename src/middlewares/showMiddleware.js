import { showSuccess } from "../actions/show";
import { show} from "../api";



const showMiddleware = store => next => action => {
    if (action.type === 'SHOW_REQUEST') {
        show(action.payload)
        .then(series => {
            store.dispatch(showSuccess(series))
        })
    }
    return next(action)
}

export default showMiddleware;