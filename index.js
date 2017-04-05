import path from 'path';
import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';


const app = express();
const port = process.env.PORT || 8080;


app.use(morgan('combined')); // logging middleware

// Static route
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
const location = createLocation(req.url);
    if (err) { 
            console.error(err);
                  return res.status(500).end('Internal server error');
                  }
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      console.error(err);
      return res.status(500).end('Internal server error');
    }

  res.status(200).send(
    `<html>
      <head><link rel="stylesheet" href="/static/styles.css" /></head>
      <body>
        <div id="react-app">${renderToString(<Resolved />)}</div>
        <script>window.__REACT_RESOLVER_PAYLOAD__ = ${JSON.stringify(data)}</script>
        <script>window.API_URL = "${process.env.PUBLIC_API}";</script>
        <script src="/static/browser.js"></script>
      </body>
    </html>`);

});

const server = app.listen(port, 'localhost', () => {
  const address = server.address();
  console.log(`Listening on http://${address.address}:${address.port}`); // eslint-disable-line
});
