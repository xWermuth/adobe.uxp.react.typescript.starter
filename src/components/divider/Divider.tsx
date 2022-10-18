import React from 'react';

export type DividerSize = 'small' | 'medium' | 'large';

interface DividerProps {
  size?: DividerSize;
  onClick?(e: React.MouseEvent<HTMLHeadElement, MouseEvent>): void;
  ref?: React.RefObject<HTMLElement>;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-divider': DividerProps;
    }
  }
}

const Divider: React.FC<DividerProps> = (props) => {
  return <sp-divider {...props} />;
};

export default Divider;
