import { FC } from 'react';

import { ButtonIcon } from '@/components/ReusefulComponents/ButtonIcon';
import { DouleLineField } from '@/components/ReusefulComponents/DoubleLinesField';
import { OneLineField } from '@components/ReusefulComponents/OneLineField';
import styles from './ProductItem.module.scss'
import iconDelete from '@assets/icons/bin.svg'

interface ProductItemProps {
  productTitle: string;
  serialNum: string;
  guaranteeStart: string;
  guaranteeEnd: string;
  priceInDollars: string;
  priceInHryvnas: string;
  shortDate: string;
  longDate: string;
  condition: string;
  orderName: string;
  handleDeleteButton: () => void;
}

export const ProductItem: FC<ProductItemProps> = ({
  productTitle,
  serialNum,
  guaranteeStart,
  guaranteeEnd,
  priceInDollars,
  priceInHryvnas,
  shortDate,
  longDate,
  condition,
  orderName,
  handleDeleteButton,
}) => (
  <li className={styles.product__item}>
    <article className={styles.product}>
      <div className={styles.product__status}></div>

      <DouleLineField
        doubleLineFieldClass={styles.product__title}
        topLineClass={''}
        bottomLineClass={styles.product__title__bottom}
        topLine={productTitle}
        bottomLine={serialNum}
      />

      <DouleLineField
        doubleLineFieldClass={''}
        topLineClass={''}
        bottomLineClass={''}
        topLine={guaranteeStart}
        bottomLine={guaranteeEnd}
      />

      <OneLineField oneLineClass={''} oneLineContent={condition} />

      <DouleLineField
        doubleLineFieldClass={''}
        topLineClass={''}
        bottomLineClass={''}
        topLine={priceInDollars}
        bottomLine={priceInHryvnas}
      />

      <OneLineField oneLineClass={''} oneLineContent={orderName} />

      <DouleLineField
        doubleLineFieldClass={''}
        topLineClass={''}
        bottomLineClass={''}
        topLine={shortDate}
        bottomLine={longDate}
      />

      <ButtonIcon
        buttonClass={styles.product__btn}
        buttonHandle={handleDeleteButton}
        iconClass={styles.product__icon}
        iconHref={iconDelete}
      />
    </article>
  </li>
);
