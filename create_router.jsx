
import React from 'react';

import App from './components/app';


export default (Router, initialProps) =>
  props =>
    <Router {...initialProps} {...props} >
      <App />
    </Router>;
