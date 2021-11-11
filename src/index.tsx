import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/App';

import WebFont from 'webfontloader';

import './index.css';

WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'Roboto']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
