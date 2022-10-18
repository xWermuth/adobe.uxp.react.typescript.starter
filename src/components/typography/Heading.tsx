import React from 'react';

export type HeadingClassification = 'serif' | 'sans serif';
export type HeadingScript = 'latin' | 'han' | 'arabic' | 'hebrew';
export type HeadingSize = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type HeadingWeight = 'light' | 'default' | 'heavy';

interface HeadingProps {
  children?: React.ReactNode;
  classification?: HeadingClassification;
  script?: HeadingScript;
  size?: HeadingSize;
  weight?: HeadingWeight;
  onClick?(e: React.MouseEvent<HTMLHeadElement, MouseEvent>): void;
  ref?: React.RefObject<HTMLElement>;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-heading': HeadingProps;
    }
  }
}

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return <sp-heading {...props}>{children}</sp-heading>;
};

export default Heading;
