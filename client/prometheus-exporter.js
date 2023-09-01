const express = require('express');
const { register } = require('prom-client');
const { requestsCounter, errorsCounter } = require('./metrics');

const app = express();
const port = 8082;

// Регистрация метрик
register.clear();
register.registerMetric(requestsCounter);
register.registerMetric(errorsCounter);

// маршрут для метрик
app.get('/metrics', (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(register.metrics());
});

app.listen(port, () => {
  console.log(`Prometheus exporter listening on port ${port}`);
});
