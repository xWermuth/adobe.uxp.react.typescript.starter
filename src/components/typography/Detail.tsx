import React from 'react';

export type DetailScript = 'latin' | 'han' | 'arabic' | 'hebrew';
export type DetailSize = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type DetailWeight = 'light' | 'default';

interface DetailProps {
  children?: React.ReactNode;
  script?: DetailScript;
  size?: DetailSize;
  weight?: DetailWeight;
  ref?: React.RefObject<HTMLElement>;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-detail': DetailProps;
    }
  }
}

const Detail: React.FC<DetailProps> = ({ children, ...props }) => {
  return <sp-detail {...props}>{children}</sp-detail>;
};

export default Detail;
