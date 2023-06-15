import { Order } from './types/Order';
import { Product } from './types/Product';

export interface OrderTotal {
  dollars: number;
  hryvnas: number;
}

export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export const calculateOrderTotal = (
  order: Order,
  products: Product[],
): OrderTotal => {
  let totalDollars = 0;
  let totalHryvnas = 0;

  const orderProducts = products.filter(product => product.order === order.id);

  orderProducts.forEach(product => {
    const priceInDollars: Price | undefined = product.price.find(
      price => price.symbol === 'USD',
    );
    const priceInHryvnas: Price | undefined = product.price.find(
      price => price.symbol === 'UAH',
    );

    if (priceInDollars) {
      totalDollars += priceInDollars.value;
    }

    if (priceInHryvnas) {
      totalHryvnas += priceInHryvnas.value;
    }
  });

  return {
    dollars: totalDollars,
    hryvnas: totalHryvnas,
  };
};
