import { FC } from 'react';

import { ButtonIcon } from '@/components/ReusefulComponents/ButtonIcon';
import { DouleLineField } from '@/components/ReusefulComponents/DoubleLinesField';
import { OneLineField } from '@components/ReusefulComponents/OneLineField';

import iconDelete from '@assets/icons/bin.svg';
import iconMenu from '@assets/icons/menu.svg';

import styles from './OrderItem.module.scss';

interface ProductItemProps {
  orderTitle: string;
  countProducts: number;
  shortDate: string;
  longDate: string;
  sumInDollars: string;
  sumInHryvnas: string;
  handleDeleteButton: () => void;
}

export const OrderItem: FC<ProductItemProps> = ({
  orderTitle,
  countProducts,
  shortDate,
  longDate,
  sumInDollars,
  sumInHryvnas,
  handleDeleteButton,
}) => (
  <li className={styles.order__item}>
    <article className={styles.order}>
      <OneLineField oneLineClass={styles.title} oneLineContent={orderTitle} />

      <ButtonIcon
        buttonClass={styles.order__btn}
        iconClass={styles.order__icon}
        iconHref={iconMenu}
      />

      <DouleLineField
        doubleLineFieldClass={styles.title}
        topLineClass={''}
        bottomLineClass={''}
        topLine={countProducts}
        bottomLine={'Products'}
      />

      <DouleLineField
        doubleLineFieldClass={''}
        topLineClass={''}
        bottomLineClass={''}
        topLine={shortDate}
        bottomLine={longDate}
      />

      <DouleLineField
        doubleLineFieldClass={''}
        topLineClass={''}
        bottomLineClass={''}
        topLine={sumInDollars}
        bottomLine={sumInHryvnas}
      />

      <ButtonIcon
        buttonClass={styles.order__btn}
        buttonHandle={handleDeleteButton}
        iconClass={styles.order__icon}
        iconHref={iconDelete}
      />
    </article>
  </li>
);
