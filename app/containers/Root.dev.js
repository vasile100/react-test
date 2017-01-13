import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Router } from 'react-router';
import routes from '../routes';
/* eslint-disable react/prefer-stateless-function */
export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
          <Provider store={store}>
            <div>
              <Router history={history} routes={routes} />
              <DevTools />
            </div>
          </Provider>
        );
    }
}
/* eslint-enable react/prefer-stateless-function */
Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
