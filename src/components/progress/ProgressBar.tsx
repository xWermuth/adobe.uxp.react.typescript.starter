import React from 'react';
import Label from '../typography/Label';

interface ProgressBarProps {
  max: number;
  value: number;
  'show-value'?: boolean;
  min?: number;
  width?: number;
  'value-label'?: string;
  size?: 'small' | 'medium' | 'large ' | 'extra-large';
  variant?: 'overBackground' | 'default';
  indeterminate?: boolean;
  label?: string;
  style?: string;
  ref?: React.RefObject<HTMLElement>;
  onClick?(e: React.MouseEvent<HTMLHeadElement, MouseEvent>): void;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-progressbar': ProgressBarProps;
    }
  }
}

/**
 * To show label
 * @returns
 */
const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return <sp-progressbar {...props}>{props.label && <Label slot="label">{props.label}</Label>}</sp-progressbar>;
};

export default ProgressBar;
