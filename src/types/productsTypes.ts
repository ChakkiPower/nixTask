export interface Product {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
}

export const PRODUCTS_LOADING_SUCCESS = 'PRODUCTS_LOADING_SUCCESS';
export const PRODUCTS_LOADING_FAILURE = 'PRODUCTS_LOADING_FAILURE';

export interface ProductsStateType {
  products: Product[];
  isLoading: boolean;
  errors: null | string;
}

interface ProductsLoadingSuccessActionType {
  type: typeof PRODUCTS_LOADING_SUCCESS;
  payload: Product[];
}

interface ProductsLoadingFailureActionType {
  type: typeof PRODUCTS_LOADING_FAILURE;
  payload: string;
}

export type ProductsActionType =
  | ProductsLoadingSuccessActionType
  | ProductsLoadingFailureActionType;
