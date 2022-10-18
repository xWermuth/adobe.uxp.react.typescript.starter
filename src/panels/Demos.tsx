import { ActionButton, defaultTheme, Text, Flex, RadioGroup, Radio, Checkbox, Button, View } from '@adobe/react-spectrum';
import React from 'react';
import Beaker from '@spectrum-icons/workflow/Beaker';
import { ColorPicker } from '../components/ColorPicker';
import Provider from '../components/provider/Provider';

export const Demos = () => (
  <Provider theme={defaultTheme}>
    <View backgroundColor={'transparent'}>
      <Flex direction="column" gap="size-100" alignItems="start" height={'size-1200'} width={'size-1000'}>
        <RadioGroup label="Favorite animal">
          <Radio value="dogs">Dogs</Radio>
          <Radio value="cats">Cats</Radio>
          <Radio value="horses">Horses</Radio>
        </RadioGroup>
        {/* <Checkbox>I agree</Checkbox>
      <Button variant="primary">Submit</Button> */}
      </Flex>
    </View>
  </Provider>
);
