import {
  ADD_BASKET_ITEM,
  BasketActionType,
  BasketStateType,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_BASKET_ITEM,
  UPDATE_ITEM_QUANTITY,
} from '../../types/basketTypes';

const initialState: BasketStateType = {
  items: [],
};

const basketReducer = (
  state = initialState,
  action: BasketActionType,
): BasketStateType => {
  switch (action.type) {
    case ADD_BASKET_ITEM:
      const isAlreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (isAlreadyExists) {
        const newItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          items: newItems,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case REMOVE_BASKET_ITEM:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        items: filteredItems,
      };
    case UPDATE_ITEM_QUANTITY:
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? {...item, quantity: action.payload.quantity}
          : item,
      );
      return {
        ...state,
        items: updatedItems,
      };
    case INCREMENT_QUANTITY:
      const incrementedItems = state.items.map((item) =>
        item.id === action.payload
          ? {...item, quantity: item.quantity + 1}
          : item,
      );
      return {
        ...state,
        items: incrementedItems,
      };
    case DECREMENT_QUANTITY:
      const decrementedItems = state.items.map((item) =>
        item.id === action.payload
          ? {...item, quantity: item.quantity - 1}
          : item,
      );
      return {
        ...state,
        items: decrementedItems,
      };
    default:
      return state;
  }
};

export default basketReducer;
