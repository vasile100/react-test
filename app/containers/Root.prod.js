import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
          <Provider store={store}>
            <Router history={history} routes={routes} />
          </Provider>
        );
    }
}
/* eslint-enable react/prefer-stateless-function */

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
