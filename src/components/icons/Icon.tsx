import React from 'react';

export type IconName =
  | 'ui:AlertMedium'
  | 'ui:AlertSmall'
  | 'ui:ArrowDownSmall'
  | 'ui:ArrowLeftMedium'
  | 'ui:ArrowUpSmall'
  | 'ui:Asterisk'
  | 'ui:CheckmarkMedium'
  | 'ui:CheckmarkSmall'
  | 'ui:ChevronDownMedium'
  | 'ui:ChevronDownSmall'
  | 'ui:ChevronLeftLarge'
  | 'ui:ChevronLeftMedium'
  | 'ui:ChevronRightLarge'
  | 'ui:ChevronRightMedium'
  | 'ui:ChevronRightSmall'
  | 'ui:ChevronUpSmall'
  | 'ui:CornerTriangle'
  | 'ui:CrossLarge'
  | 'ui:CrossMedium'
  | 'ui:CrossSmall'
  | 'ui:DashSmall'
  | 'ui:DoubleGripper'
  | 'ui:FolderBreadcrumb'
  | 'ui:HelpMedium'
  | 'ui:HelpSmall'
  | 'ui:InfoMedium'
  | 'ui:InfoSmall'
  | 'ui:Magnifier'
  | 'ui:More'
  | 'ui:SkipLeft'
  | 'ui:SkipRight'
  | 'ui:Star'
  | 'ui:StarOutline'
  | 'ui:SuccessMedium'
  | 'ui:SuccessSmall'
  | 'ui:TripleGripper';

export type IconSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export type IconSlot = 'icon';

interface IconProps {
  children?: React.ReactNode;
  name?: IconName;
  size?: IconSize;
  slot?: IconSlot;
  onClick?(e: React.MouseEvent<HTMLHeadElement, MouseEvent>): void;
  ref?: React.RefObject<HTMLElement>;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sp-icon': IconProps;
    }
  }
}

const Icon: React.FC<IconProps> = ({ children, ...props }) => {
  return <sp-icon {...props}>{children}</sp-icon>;
};

export default Icon;
