/* eslint-disable global-require */
require('babel-polyfill');
/* eslint-enable global-require */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        /* eslint-disable global-require */
        const NewRoot = require('./containers/Root').default;
        /* eslint-enable global-require */
        render(
          <AppContainer>
            <NewRoot store={store} history={history} />
          </AppContainer>,
          document.getElementById('root')
        );
    });
}
