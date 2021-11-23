import {Dispatch} from 'redux';
import {
  ProductsActionType,
  Product,
  PRODUCTS_LOADING_SUCCESS,
  PRODUCTS_LOADING_FAILURE,
} from '../../types/productsTypes';

import axios from 'axios';

export const getProducts = () => {
  return (dispatch: Dispatch<ProductsActionType>) => {
    axios
      .get('https://my-json-server.typicode.com/benirvingplt/products/products')
      .then((res) => {
        dispatch(productsLoadingSuccess(res.data));
      })
      .catch((err) => {
        dispatch(productsLoadingFailure(err.message));
      });
  };
};

const productsLoadingSuccess = (products: Product[]): ProductsActionType => ({
  type: PRODUCTS_LOADING_SUCCESS,
  payload: products,
});

const productsLoadingFailure = (error: string): ProductsActionType => ({
  type: PRODUCTS_LOADING_FAILURE,
  payload: error,
});
