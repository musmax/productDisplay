export const CartReducer = (state, action) => {
// lets destructure the action
const {type, payload} = action;
    switch (type) {
        case "ADD_TO_CART":
            return {...state, cartList: payload.products}
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.products}
        case "UPDATE_TOTAL":
            return {...state, total:payload.total}
        default:
            break;
    }
}