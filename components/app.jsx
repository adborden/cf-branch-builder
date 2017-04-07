import React from 'react';

import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Home from './home';

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        <li><Link to="/foo">foo</Link></li>
        <li><Link to="/bar">bar</Link></li>
        <li><Link to="/baz/12">baz 12</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route name="foo" path="/foo" component={Home} />
      <Route name="bar" path="/bar" component={Home} />
      <Route name="baz" path="/baz/:id" component={Home} />
    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
