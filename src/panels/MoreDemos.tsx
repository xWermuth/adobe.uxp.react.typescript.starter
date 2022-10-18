import React from 'react';
import ActionButton from '../components/buttons/ActionButton';

export const MoreDemos: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <ActionButton
      onClick={(e) => {
        setCount((c) => c + 1);
      }}
    >
      {count} Edits
    </ActionButton>
  );
};
