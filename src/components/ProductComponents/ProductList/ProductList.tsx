import { Product } from '@/types/Product';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../redux/productReducer';
import { RootState } from '../../../redux/rootReducer';
import { ProductItem } from '../ProductItem';
import styles from './ProductList.module.scss';

export const ProductList: FC = () => {
  const products: Product[] = useSelector(
    (state: RootState) => state.products.products,
  );

  const dispatch = useDispatch();

  const handleDeleteButton = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <ul className={styles.productList}>
      {products.map(product => (
        <ProductItem
          key={product.id}
          productTitle={product.title}
          serialNum={String(product.serialNumber)}
          guaranteeStart={`From ${product.guarantee.start}`}
          guaranteeEnd={`To ${product.guarantee.end}`}
          priceInDollars={`${product.price[0].value} ${product.price[0].symbol}`}
          priceInHryvnas={`${product.price[1].value} ${product.price[1].symbol}`}
          shortDate={product.date
            .split(' ')[0]
            .split('-')
            .slice(1)
            .reverse()
            .join('/')}
          longDate={product.date.split(' ')[0].split('-').reverse().join('/')}
          condition={product.isNew ? 'New' : 'Old'}
          orderName={`Order ${product.order}`}
          handleDeleteButton={() => handleDeleteButton(product.id)}
        />
      ))}
    </ul>
  );
};
