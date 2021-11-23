import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
} from 'react-native';
import {BasketItem} from '../../types/basketTypes';

import {Product} from '../../types/productsTypes';

import ProductComponent from '../ProductComponent';

import styles from './styles';

interface Props {
  data: Product[] | BasketItem[];
  mode?: string;
}

const ProductListComponent: React.FC<Props> = ({data, mode}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
      style={styles.wrapper}>
      <FlatList
        data={data}
        contentContainerStyle={
          data.length === 0 ? styles.emptyList : styles.list
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => <ProductComponent item={item} mode={mode} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.emptyTitle}>Список порожній</Text>
        )}
      />
    </KeyboardAvoidingView>
  );
};

export default ProductListComponent;
