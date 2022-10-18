import React from 'react';

interface TextFieldProps {
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  quiet?: boolean;
  type?: 'number' | 'search' | 'password';
  placeholder: string;
  children?: React.ReactNode;
  style?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  ref?: React.RefObject<HTMLElement>;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-textfield': TextFieldProps;
    }
  }
}

const TextField: React.FC<TextFieldProps> = ({ children, ...props }) => {
  return <sp-textfield {...props}>{children}</sp-textfield>;
};

export default TextField;
