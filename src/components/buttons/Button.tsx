import React from 'react';

export type ButtonVariant = 'cta' | 'primary' | 'secondary' | 'warning' | 'overBackground';

interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  tabindex?: number;
  autofocus?: 'autofocus';
  quiet?: boolean;
  children?: React.ReactNode;
  style?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  ref?: React.RefObject<HTMLElement>;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-button': ButtonProps;
    }
  }
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <sp-button {...props}>{children}</sp-button>;
};

export default Button;
