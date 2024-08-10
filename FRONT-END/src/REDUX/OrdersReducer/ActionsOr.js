export const ADD_TO_CART = "ADDTOCART";
export const INCREMENT = "INCREMENT";
export const DECRIMENT = "DECRIMENT";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const UPDATE_COUNT_ORDER = "UPDATE_COUNT_ORDER";


export const ADDTOCART = (data ,count) => {
    return {
       type: ADD_TO_CART,
       payload:{data,count}
    }
}

export const INCREMENTACTION = (id) => {
    return {
        type: INCREMENT,
        payload:id
    }
}

export const DECRIMENTACTION = (id) => {
    return {
       type: DECRIMENT,
       payload:id
    }
}

export const UPDATECOUNTORDER = (id, quantity) => {
    return {
        type: UPDATE_COUNT_ORDER,
        payload:{id, quantity}
    }
}

export const REMOVEORDER = (id) => {
    return {
       type: REMOVE_ORDER,
       payload:id
    }
}