import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes'
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes'
import { sortOrderFn } from '../reducers/helpers'

const initState = {
    orders:[]
}

const farmReducer = (state=initState, action) => {
    switch (action.type) {
        case MOVE_ORDER_TO_FARM:
            return {
                orders: [action.payload, ...state.orders].sort(sortOrderFn)
            }
        case MOVE_ORDER_TO_CUSTOMER:
            return {
                orders: state.orders.filter(order => order.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default farmReducer;