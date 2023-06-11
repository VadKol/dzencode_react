import { FC } from 'react';

import { ButtonIcon } from '@/components/ReusefulComponents/ButtonIcon';
import { DouleLineField } from '@/components/ReusefulComponents/DoubleLinesField';
import { OneLineField } from '@components/ReusefulComponents/OneLineField';

interface ProductItemProps {
  classDoubleLineField: string;
  classOneLineField: string;
  classTopLine: string;
  classBottomLine: string;
  classDetailsButton: string;
  classIconDetails: string;
  classDeleteButton: string;
  classIconDelete: string;
  orderTitle: string;
  hrefDetailsIcon: string;
  countProducts: number;
  shortDate: string;
  longDate: string;
  sumInDollars: string;
  sumInHryvnas: string;
  handleDeleteButton: () => void;
  hrefDeleteIcon: string;
}

export const OrderItem: FC<ProductItemProps> = ({
  classDoubleLineField,
  classOneLineField,
  classTopLine,
  classBottomLine,
  classDetailsButton,
  classIconDetails,
  classDeleteButton,
  classIconDelete,
  orderTitle,
  hrefDetailsIcon,
  countProducts,
  shortDate,
  longDate,
  sumInDollars,
  sumInHryvnas,
  handleDeleteButton,
  hrefDeleteIcon,
}) => (
  <li>
    <article>

      <OneLineField oneLineClass={classOneLineField} oneLineContent={orderTitle} />

      <ButtonIcon
        buttonClass={classDetailsButton}
        iconClass={classIconDetails}
        iconHref={hrefDetailsIcon}
      />

      <DouleLineField
        doubleLineFieldClass={classDoubleLineField}
        topLineClass={classTopLine}
        bottomLineClass={classBottomLine}
        topLine={countProducts}
        bottomLine={'Products'}
      />

      <DouleLineField
        doubleLineFieldClass={classDoubleLineField}
        topLineClass={classTopLine}
        bottomLineClass={classBottomLine}
        topLine={shortDate}
        bottomLine={longDate}
      />

      <DouleLineField
        doubleLineFieldClass={classDoubleLineField}
        topLineClass={classTopLine}
        bottomLineClass={classBottomLine}
        topLine={sumInDollars}
        bottomLine={sumInHryvnas}
      />

      <ButtonIcon
        buttonClass={classDeleteButton}
        buttonHandle={handleDeleteButton}
        iconClass={classIconDelete}
        iconHref={hrefDeleteIcon}
      />
    </article>
  </li>
);
