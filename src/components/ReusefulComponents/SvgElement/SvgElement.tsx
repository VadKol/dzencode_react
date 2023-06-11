import { FC } from "react";

interface SvgProps {
  svgClass: string;
  svgHref: string;
};

export const SvgElement: FC<SvgProps> = ({ svgClass,  svgHref }) => (
  <svg className={svgClass}>
    <use href={svgHref}></use>
  </svg>
);