import { FC } from 'react';

import { SvgElement } from '@components/ReusefulComponents/SvgElement';

interface ButtonIconProps {
  buttonClass: string;
  buttonHandle?: () => void;
  iconClass: string;
  iconHref: string;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  buttonClass,
  buttonHandle,
  iconClass,
  iconHref,
}) => (
  <button
    className={buttonClass}
    type="button"
    onClick={buttonHandle}
  >
    <SvgElement svgClass={iconClass} svgHref={iconHref} />
  </button>
);
