import React from 'react';
import Button from '../components/buttons/Button';
import ButtonGroup from '../components/buttons/ButtonGroup';

export const MoreDemos: React.FC = (props) => {
  return (
    <div className="mybutton">
      <Button variant="cta">overBackground</Button>
      <Button variant="overBackground">overBackground</Button>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="warning">warning</Button>
    </div>
  );
};
