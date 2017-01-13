import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import SearchableTable from './containers/SearchableTable';
import About from './components/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchableTable} />
    <Route path="/about" component={About} />
  </Route>
);
