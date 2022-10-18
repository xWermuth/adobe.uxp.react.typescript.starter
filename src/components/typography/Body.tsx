import React from 'react';

export type BodyClassification = 'serif' | 'sans serif';
export type BodyScript = 'latin' | 'han' | 'arabic' | 'hebrew';
export type BodySize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

interface BodyProps {
  size?: BodySize;
  classification?: BodyClassification;
  script?: BodyScript;
  placeholder?: string;
  children?: React.ReactNode;
  style?: string;
  ref?: React.RefObject<HTMLElement>;
  onClick?(e: React.MouseEvent<HTMLHeadElement, MouseEvent>): void;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-body': BodyProps;
    }
  }
}

const Body: React.FC<BodyProps> = ({ children, ...props }) => {
  return <sp-body {...props}>{children}</sp-body>;
};

export default Body;
