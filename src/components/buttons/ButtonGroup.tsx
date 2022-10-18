import React from 'react';

export type ButtonVariant = 'cta' | 'primary' | 'secondary' | 'warning' | 'overBackground';

interface ButtonGroupProps {
  vertical?: boolean;
  children?: React.ReactNode;
  style?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  ref?: React.RefObject<HTMLElement>;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-button-group': ButtonGroupProps;
    }
  }
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ...props }) => {
  return <sp-button-group {...props}>{children}</sp-button-group>;
};

export default ButtonGroup;
