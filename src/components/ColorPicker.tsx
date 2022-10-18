import React from 'react';
import Beaker from '@spectrum-icons/workflow/Beaker';
import { Button, Checkbox, Flex, Provider, Radio, RadioGroup } from '@adobe/react-spectrum';

export const ColorPicker: React.FC = () => {
  return (
    <Flex direction="column" gap="size-100" alignItems="start">
      <RadioGroup label="Favorite animal">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
        <Radio value="horses">Horses</Radio>
      </RadioGroup>
      <Checkbox>I agree</Checkbox>
      <Button variant="primary">Submit</Button>
    </Flex>
  );
};
