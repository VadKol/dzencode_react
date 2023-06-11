import { FC } from 'react';

import { ProductItem } from '@components/ProductComponents/ProductItem';

export const ProductsList: FC = () => {
  return (
    <ProductItem
      classIndicator={''}
      classDoubleLineField={''}
      classOneLineField={''}
      classTopLine={''}
      classBottomLine={''}
      classDeleteButton={''}
      classIconDelete={''}
      productTitle={''}
      serialNum={''}
      guaranteeStart={''}
      guaranteeEnd={''}
      priceInDollars={''}
      priceInHryvnas={''}
      shortDate={''}
      longDate={''}
      serviceStatus={''}
      condition={''}
      groupName={''}
      orderName={''}
      handleDeleteButton={() => {console.log("handle")}}
      hrefDeleteIcon={''}
    />
  );
};
