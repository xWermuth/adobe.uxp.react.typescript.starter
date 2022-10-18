import React from 'react';

interface ActionButtonProps {
  disabled?: boolean;
  quiet?: boolean;
  title?: string;
  children?: React.ReactNode;
  style?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  ref?: React.RefObject<HTMLElement>;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-action-button': ActionButtonProps;
    }
  }
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, ...props }) => {
  return <sp-action-button {...props}>{children}</sp-action-button>;
};

export default ActionButton;
