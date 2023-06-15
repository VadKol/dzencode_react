import { FC } from 'react';

import { ButtonIcon } from '@/components/ReusefulComponents/ButtonIcon';
import { DouleLineField } from '@/components/ReusefulComponents/DoubleLinesField';
import iconDelete from '@assets/icons/bin.svg';
import { OneLineField } from '@components/ReusefulComponents/OneLineField';
import styles from './ProductItem.module.scss';

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
        bottomLineClass={styles.product__title__bottom}
        topLine={productTitle}
        bottomLine={serialNum}
      />

      <DouleLineField topLine={guaranteeStart} bottomLine={guaranteeEnd} />

      <OneLineField oneLineContent={condition} />

      <DouleLineField topLine={priceInDollars} bottomLine={priceInHryvnas} />

      <OneLineField oneLineContent={orderName} />

      <DouleLineField topLine={shortDate} bottomLine={longDate} />

      <ButtonIcon
        buttonClass={styles.product__btn}
        buttonHandle={handleDeleteButton}
        iconClass={styles.product__icon}
        iconHref={iconDelete}
      />
    </article>
  </li>
);
