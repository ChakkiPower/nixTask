import React from 'react';
import {View, Text, Image} from 'react-native';
import {BasketItem} from '../../types/basketTypes';

import Button from '../Button';

import styles from './styles';

interface Props {
  item: BasketItem;
  mode?: string;
}

const ProductComponent: React.FC<Props> = ({item, mode}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.img}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price} $</Text>
        <Button item={item} mode={mode} />
      </View>
    </View>
  );
};

export default React.memo(ProductComponent);
