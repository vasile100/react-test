if (process.env.NODE_ENV === 'production') {
    /* eslint-disable global-require */
    module.exports = require('./configureStore.prod');
    /* eslint-enable global-require */
} else {
    /* eslint-disable global-require */
    module.exports = require('./configureStore.dev');
    /* eslint-enable global-require */
}
