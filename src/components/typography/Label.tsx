import React from 'react';

interface LabelProps {
  isrequired?: boolean;
  slot: string;
  children?: React.ReactNode;
  style?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  ref?: React.RefObject<HTMLElement>;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-label': LabelProps;
    }
  }
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <sp-label {...props}>{children}</sp-label>;
};

export default Label;
