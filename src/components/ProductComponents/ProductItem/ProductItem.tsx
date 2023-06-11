import { FC } from 'react';

import { ButtonIcon } from '@/components/ReusefulComponents/ButtonIcon';
import { DouleLineField } from '@/components/ReusefulComponents/DoubleLinesField';
import { OneLineField } from '@components/ReusefulComponents/OneLineField';

interface ProductItemProps {
  classIndicator: string;
  classDoubleLineField: string;
  classOneLineField: string;
  classTopLine: string;
  classBottomLine: string;
  classDeleteButton: string;
  classIconDelete: string;
  productTitle: string;
  serialNum: string;
  guaranteeStart: string;
  guaranteeEnd: string;
  priceInDollars: string;
  priceInHryvnas: string;
  shortDate: string;
  longDate: string;
  serviceStatus: string;
  condition: string;
  groupName: string;
  orderName: string;
  handleDeleteButton: () => void;
  hrefDeleteIcon: string;
}

export const ProductItem: FC<ProductItemProps> = ({
  classIndicator,
  classDoubleLineField,
  classOneLineField,
  classTopLine,
  classBottomLine,
  classDeleteButton,
  classIconDelete,
  productTitle,
  serialNum,
  guaranteeStart,
  guaranteeEnd,
  priceInDollars,
  priceInHryvnas,
  shortDate,
  longDate,
  serviceStatus,
  condition,
  groupName,
  orderName,
  handleDeleteButton,
  hrefDeleteIcon,
}) => (
  <li>
    <article>
      <div className={classIndicator}></div>

      <DouleLineField
        doubleLineFieldClass={classDoubleLineField}
        topLineClass={classTopLine}
        bottomLineClass={classBottomLine}
        topLine={productTitle}
        bottomLine={serialNum}
      />

      <OneLineField oneLineClass={classOneLineField} oneLineContent={serviceStatus} />

      <DouleLineField
        doubleLineFieldClass={classDoubleLineField}
        topLineClass={classTopLine}
        bottomLineClass={classBottomLine}
        topLine={guaranteeStart}
        bottomLine={guaranteeEnd}
      />

      <OneLineField oneLineClass={classOneLineField} oneLineContent={condition} />

      <DouleLineField
        doubleLineFieldClass={classDoubleLineField}
        topLineClass={classTopLine}
        bottomLineClass={classBottomLine}
        topLine={priceInDollars}
        bottomLine={priceInHryvnas}
      />

      <OneLineField oneLineClass={classOneLineField} oneLineContent={groupName} />

      <OneLineField oneLineClass={classOneLineField} oneLineContent={orderName} />

      <DouleLineField
        doubleLineFieldClass={classDoubleLineField}
        topLineClass={classTopLine}
        bottomLineClass={classBottomLine}
        topLine={shortDate}
        bottomLine={longDate}
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
