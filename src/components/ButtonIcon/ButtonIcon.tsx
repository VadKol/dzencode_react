import { FC } from 'react';

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
    <svg className={iconClass}>
      <use href={iconHref}></use>
    </svg>
  </button>
);
