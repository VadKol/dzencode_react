import { FC } from 'react';

interface OneLineProps {
  oneLineClass: string;
  oneLineContent: string;
}

export const OneLineField: FC<OneLineProps> = ({
  oneLineClass,
  oneLineContent,
}) => <p className={oneLineClass}>{oneLineContent}</p>;
