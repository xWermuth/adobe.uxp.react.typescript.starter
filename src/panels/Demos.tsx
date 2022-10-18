import React, { useState } from 'react';
import ActionButton from '../components/buttons/ActionButton';
import Divider from '../components/divider/Divider';
import ProgressBar from '../components/progress/ProgressBar';
import Heading from '../components/typography/Heading';

export const Demos: React.FC = () => {
  const [progress, setProgress] = useState(10);
  return (
    <div>
      <Heading size="M">Hello world</Heading>

      <Divider size="large" />
      <ActionButton onClick={() => setProgress((p) => Math.ceil(p + 10))}>Add progress</ActionButton>

      <ProgressBar show-value max={100} value={progress} variant="overBackground" label="Uploading" />
    </div>
  );
};
