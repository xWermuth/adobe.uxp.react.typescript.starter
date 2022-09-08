import React from 'react';
import { Content } from '@adobe/react-spectrum';

export const Hello: React.FC<{ message: string }> = (props) => {
  return <Content>Hello, {props.message || 'world'} </Content>;
};
