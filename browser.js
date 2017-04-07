
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createRouter from './create_router';

const router = createRouter(BrowserRouter, {});

render(React.createElement(router), document.getElementById('react-app'));
