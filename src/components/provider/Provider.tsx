import React from 'react';
import { Provider as UXPProvider, ProviderProps } from '@adobe/react-spectrum';

const Provider: React.FC<ProviderProps> = ({ children, ...props }) => {
  return (
    <UXPProvider {...props} UNSAFE_style={{ background: 'transparent' }}>
      {children}
    </UXPProvider>
  );
};

export default Provider;
