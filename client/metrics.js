const { Counter } = require('prom-client');

const requestsCounter = new Counter({
  name: 'frontend_requests_total',
  help: 'total number of requests to the frontend',
});

const errorsCounter = new Counter({
  name: 'frontend_errors_total',
  help: 'total number of errors in the frontend',
});

module.exports = {
  requestsCounter,
  errorsCounter,
};
