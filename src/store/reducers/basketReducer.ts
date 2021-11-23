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
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case REMOVE_BASKET_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {...item, quantity: action.payload.quantity}
            : item,
        ),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? {...item, quantity: item.quantity - 1}
            : item,
        ),
      };
    default:
      return state;
  }
};

export default basketReducer;
