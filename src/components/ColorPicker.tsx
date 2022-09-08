import React, { useRef, useState } from 'react';
import { ColorSlider } from '@react-spectrum/color';
import { Flex } from '@adobe/react-spectrum';

export const ColorPicker: React.FC = () => {
  return (
    <Flex gap="size-300" wrap alignItems="stretch">
      <ColorSlider channel="saturation" defaultValue="hsl(0, 100%, 50%)" label={null} />
      <ColorSlider channel="lightness" defaultValue="hsl(0, 100%, 50%)" showValueLabel={false} />
    </Flex>
  );
};
