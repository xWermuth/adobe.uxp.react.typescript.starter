import React from 'react';
import { Heading, Divider, Content, Well, ButtonGroup, Button, Provider, defaultTheme } from '@adobe/react-spectrum';
import InfoSmall from '@spectrum-icons/workflow/Info';

// @ts-expect-error
import { versions } from 'uxp';

import os from 'os';
// import './About.css';

interface Props {
  dialog: {
    close(arg: string): void;
  };
}

export const About: React.FC<Props> = (props) => {
  return (
    <Provider theme={defaultTheme}>
      <form method="dialog" className="aboutDialog">
        <Heading>React Starter Plugin</Heading>
        <Divider size="L"></Divider>
        <Content>
          This is a simple plugin that demonstrates the various capabilities of React on UXP. When adapting to your own projects, you can
          replace <code>index.jsx</code> and the components with your own.
        </Content>
        <webview id="webview" style={{ width: '100%', height: 360 }} src="https://www.google.com"></webview>
        <Well>
          <InfoSmall />
          We've also included the `WC` component and a couple of controllers. You do not need to use these in your own projects, but you are
          welcome to do so.
        </Well>
        <Well>VERSIONS</Well>
        <div className="table">
          <div>
            <Well>PLUGIN: </Well>
            <Content> {versions.plugin}</Content>
          </div>
          <div>
            <Well>OPERATING SYSTEM:</Well>
            <Content>
              {' '}
              {os.platform()} {os.release()}
            </Content>
          </div>
          <div>
            <Well>UNIFIED EXTENSIBILITY PLATFORM:</Well>
            <Content>{versions.uxp}</Content>
          </div>
        </div>
        <ButtonGroup>
          <Button variant="secondary" isQuiet onPress={() => props.dialog.close('reasonCanceled')}>
            Cancel
          </Button>
          <Button autoFocus variant="primary" onPress={() => props.dialog.close('ok')}>
            OK
          </Button>
        </ButtonGroup>
      </form>
    </Provider>
  );
};
