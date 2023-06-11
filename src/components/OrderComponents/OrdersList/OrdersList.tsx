import { FC } from 'react';

import { OrderItem } from '@components/OrderComponents/OrderItem';

export const OrderList: FC = () => {
  return (
  <OrderItem
    classDoubleLineField={''}
    classOneLineField={''}
    classTopLine={''}
    classBottomLine={''}
    classDetailsButton={''}
    classIconDetails={''}
    classDeleteButton={''}
    classIconDelete={''}
    orderTitle={''}
    hrefDetailsIcon={''}
    countProducts={0}
    shortDate={''}
    longDate={''}
    sumInDollars={''}
    sumInHryvnas={''}
    handleDeleteButton={() => console.log('orderhandle2')}
    hrefDeleteIcon={''} />
  );
};

