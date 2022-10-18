import React from 'react';
import { ActionButton, Button, defaultTheme, Text, TextField, View } from '@adobe/react-spectrum';
import { Hello } from '../components/Hello';
import Edit from '@spectrum-icons/workflow/Edit';
import Provider from '../components/provider/Provider';

export const MoreDemos: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <Provider theme={defaultTheme} UNSAFE_style={{ background: 'transparent' }}>
      <ActionButton onPress={() => setCount((c) => c + 1)}>{count} Edits</ActionButton>
      {/* <button onClick={(e) => setCount((c) => c + 1)}>{count}</button> */}
    </Provider>
  );
};
