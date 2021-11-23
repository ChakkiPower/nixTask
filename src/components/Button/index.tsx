import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  addBasketItem,
  removeBasketItem,
  updateItemQuantity,
  incrementItemQuantity,
  decrementItemQuantity,
} from '../../store/actions/basketActions';
import {BasketItem} from '../../types/basketTypes';

import styles from './styles';

interface Props {
  item: BasketItem;
  mode?: string;
}

const Button: React.FC<Props> = ({item, mode}) => {
  const dispatch = useDispatch();

  const onItemValueChange = (value: string): void => {
    const quantity = Number(value.replace(/[^0-9^\.]+/g, ''));
    dispatch(updateItemQuantity(quantity, item.id));
  };

  const addItemToBasket = useCallback(
    () => dispatch(addBasketItem({...item, quantity: 1})),
    [dispatch, item],
  );

  const removeItemFromBasket = useCallback(
    () => dispatch(removeBasketItem(item)),
    [dispatch, item],
  );

  const incrementBasketItemQuantity = useCallback(
    () => dispatch(incrementItemQuantity(item.id)),
    [dispatch, item],
  );

  const decrementBasketItemQuantity = useCallback(
    () => dispatch(decrementItemQuantity(item.id)),
    [dispatch, item],
  );

  const isIncrementable = item.quantity < 99;
  const isDecrementable = item.quantity > 0;

  return (
    <>
      {mode === 'basket' ? (
        <>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={[
                styles.quantityButtonContainer,
                !isDecrementable && styles.quantityDisabledButton,
              ]}
              onPress={decrementBasketItemQuantity}
              disabled={!isDecrementable}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              maxLength={2}
              value={item.quantity.toString()}
              onChangeText={onItemValueChange}
              defaultValue={'0'}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={[
                styles.quantityButtonContainer,
                !isIncrementable && styles.quantityDisabledButton,
              ]}
              onPress={incrementBasketItemQuantity}
              disabled={!isIncrementable}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.addButtonContainer}
            onPress={removeItemFromBasket}>
            <Text style={styles.addButtonText}>Remove</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={addItemToBasket}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;
