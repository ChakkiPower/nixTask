import {
  ProductsActionType,
  ProductsStateType,
  PRODUCTS_LOADING_FAILURE,
  PRODUCTS_LOADING_SUCCESS,
} from '../../types/productsTypes';

const initialState: ProductsStateType = {
  products: [],
  isLoading: true,
  errors: null,
};

const productsReducer = (
  state = initialState,
  action: ProductsActionType,
): ProductsStateType => {
  switch (action.type) {
    case PRODUCTS_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errors: null,
        products: action.payload,
      };
    case PRODUCTS_LOADING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
