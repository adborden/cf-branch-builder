import path from 'path';
import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import createRouter from './create_router';

const app = express();
const port = process.env.PORT || 8080;


app.use(morgan('combined')); // logging middleware

// Static route
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/favicon.ico', (req, res) => {
  res.status(404).send('Not found');
});


app.get('*', (req, res) => {
  const context = {};
  const element = React.createElement(createRouter(StaticRouter, {
    location: req.url,
    context,
  }));

  res.status(200).send(
    `<html>
      <head><link rel="stylesheet" href="/static/styles.css" /></head>
      <body>
        <div id="react-app">${renderToString(element)}</div>
        <script src="/static/browser.js"></script>
      </body>
    </html>`,
  );
});

const server = app.listen(port, 'localhost', () => {
  const address = server.address();
  console.log(`Listening on http://${address.address}:${address.port}`); // eslint-disable-line
});
