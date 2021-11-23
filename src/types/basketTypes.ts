import {Product} from './productsTypes';

export interface BasketItem extends Product {
  quantity: number;
}

export const ADD_BASKET_ITEM = 'ADD_BASKET_ITEM';
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export interface BasketStateType {
  items: BasketItem[];
}

interface AddBasketItemActionType {
  type: typeof ADD_BASKET_ITEM;
  payload: BasketItem;
}

interface RemoveBasketItemActionType {
  type: typeof REMOVE_BASKET_ITEM;
  payload: BasketItem;
}

interface QuantityPayloadType {
  quantity: number;
  id: number;
}

interface UpdateItemQuantityType {
  type: typeof UPDATE_ITEM_QUANTITY;
  payload: QuantityPayloadType;
}

interface IncrementQuantityType {
  type: typeof INCREMENT_QUANTITY;
  payload: number;
}
interface DecrementQuantityType {
  type: typeof DECREMENT_QUANTITY;
  payload: number;
}

export type BasketActionType =
  | AddBasketItemActionType
  | RemoveBasketItemActionType
  | UpdateItemQuantityType
  | IncrementQuantityType
  | DecrementQuantityType;
