if (process.env.NODE_ENV === 'production') {
    /* eslint-disable global-require */
    module.exports = require('./Root.prod');
    /* eslint-enable global-require */
} else {
    /* eslint-disable global-require */
    module.exports = require('./Root.dev');
    /* eslint-enable global-require */
}
