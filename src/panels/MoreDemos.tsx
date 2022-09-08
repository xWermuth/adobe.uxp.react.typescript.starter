import React from 'react';
import { Button } from '@adobe/react-spectrum';
import { Hello } from '../components/Hello';
import PlayIcon from '@spectrum-icons/workflow/Play';

export const MoreDemos = () => {
  return (
    <>
      <Hello message="there" />
      <Button variant="primary">
        <span slot="icon">
          <PlayIcon />
        </span>
      </Button>
    </>
  );
};
