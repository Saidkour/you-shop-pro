import { DELETE_PRODUCT, SET_CATEGORIES, SET_PRODUCT } from "./ActionPr";

const initialValues = {
    products:[],
    categories:[]
};

export const ProductReducer = (state = initialValues , action) => {

 switch(action.type){
        case SET_PRODUCT: 
          return {...state, products:action.payload };

          
        case DELETE_PRODUCT:
            return {
                ...state, products:[ ...state.products.filter((product) => {
                    return product.id !== action.payload
                })]
            }

        case SET_CATEGORIES:
            return { ...state, categories:action.payload }

        default:
            return state;
    
    }
}

