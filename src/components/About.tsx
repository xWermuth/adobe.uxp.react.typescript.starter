import React from 'react';

// @ts-expect-error
import { versions } from 'uxp';

import os from 'os';
import Body from './typography/Body';
import Heading from './typography/Heading';
import Detail from './typography/Detail';
import Divider from './divider/Divider';
import Icon from './icons/Icon';
import Button from './buttons/Button';
import ButtonGroup from './buttons/ButtonGroup';
// import './About.css';

interface Props {
  dialog: {
    close(arg: string): void;
  };
}

export const About: React.FC<Props> = (props) => {
  return (
    <form method="dialog" className="aboutDialog">
      <Heading>React Starter Plugin</Heading>
      <Divider size="large"></Divider>
      <Body>
        This is a simple plugin that demonstrates the various capabilities of React on UXP. When adapting to your own projects, you can
        replace <code>index.jsx</code> and the components with your own.
      </Body>
      <webview id="webview" width="100%" height="360px" src="https://www.google.com"></webview>
      <Body className="well">
        <Icon name="ui:InfoSmall" size="s"></Icon>
        We've also included the `WC` component and a couple of controllers. You do not need to use these in your own projects, but you are
        welcome to do so.
      </Body>
      <Detail>VERSIONS</Detail>
      <div className="table">
        <div>
          <Detail>PLUGIN: </Detail>
          <Body> {versions.plugin}</Body>
        </div>
        <div>
          <Detail>OPERATING SYSTEM:</Detail>
          <Body>
            {' '}
            {os.platform()} {os.release()}
          </Body>
        </div>
        <div>
          <Detail>UNIFIED EXTENSIBILITY PLATFORM:</Detail>
          <Body>{versions.uxp}</Body>
        </div>
      </div>
      <ButtonGroup>
        <Button tabindex={0} variant="secondary" quiet onClick={() => props.dialog.close('reasonCanceled')}>
          Cancel
        </Button>
        <Button tabindex={0} autofocus="autofocus" variant="primary" onClick={() => props.dialog.close('ok')}>
          OK
        </Button>
      </ButtonGroup>
    </form>
  );
};
