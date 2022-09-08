import ReactDOM from 'react-dom';
import React from 'react';

import { core as psCore } from 'photoshop';
import { Hello } from './components/Hello';

// Render dialog to DOM, this will show the UI in the container, like a panel
ReactDOM.render(<Hello message="Hello there" />, document.getElementById('root'));
