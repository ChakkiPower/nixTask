import {
  ADD_BASKET_ITEM,
  BasketItem,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_BASKET_ITEM,
  UPDATE_ITEM_QUANTITY,
  BasketActionType,
} from '../../types/basketTypes';

export const addBasketItem = (item: BasketItem): BasketActionType => ({
  type: ADD_BASKET_ITEM,
  payload: item,
});

export const removeBasketItem = (item: BasketItem): BasketActionType => ({
  type: REMOVE_BASKET_ITEM,
  payload: item,
});

export const updateItemQuantity = (
  quantity: number,
  id: number,
): BasketActionType => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: {quantity, id},
});

export const incrementItemQuantity = (id: number): BasketActionType => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const decrementItemQuantity = (id: number): BasketActionType => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});
