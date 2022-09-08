import React from 'react';
import { Content, Heading } from '@adobe/react-spectrum';

export const Hello: React.FC<{ message: string }> = (props) => {
  return <Heading level={4}>Hello, {props.message || 'world'} </Heading>;
};
