import { FC } from "react";

interface DouleLineFieldProps {
  doubleLineFieldClass: string;
  topLineClass: string;
  bottomLineClass: string;
  topLine: string;
  bottomLine: string;
}

export const DouleLineField: FC<DouleLineFieldProps> = ({
  doubleLineFieldClass,
  topLineClass,
  bottomLineClass,
  topLine,
  bottomLine,
 }) => (
  <div className={doubleLineFieldClass}>
    <p className={topLineClass}>
      {topLine}
    </p>
    <p className={bottomLineClass}>
      {bottomLine}
    </p>
</div>
);