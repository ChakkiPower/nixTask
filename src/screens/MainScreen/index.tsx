import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {AppState} from '../../store/reducers';
import {getProducts} from '../../store/actions/productsActions';

import ProductListComponent from '../../components/ProductListComponent';

const MainScreen: React.FC = () => {
  const products = useSelector((state: AppState) => state.products.products);
  const isLoading = useSelector((state: AppState) => state.products.isLoading);
  const errors = useSelector((state: AppState) => state.products.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (errors) {
    <View>
      <Text>{errors}</Text>
    </View>;
  }

  return <ProductListComponent data={products} />;
};

export default MainScreen;
