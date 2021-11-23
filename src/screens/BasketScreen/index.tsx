import React from 'react';
import {useSelector} from 'react-redux';
import ProductListComponent from '../../components/ProductListComponent';
import {AppState} from '../../store/reducers';

const BasketScreen: React.FC = () => {
  const items = useSelector((state: AppState) => state.basket.items);
  return <ProductListComponent data={items} mode="basket" />;
};

export default BasketScreen;
