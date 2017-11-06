const express = require('express');
const app = express();
const chalk = require('chalk');

app.listen(3000, () => {
  console.log('server listening');
});

function logRequest(path, reqType) {
  console.log(chalk.blue(reqType.toUpperCase() + " " + path));
}

// app.use((req, res, next) => {
//   console.log(Object.keys(req));
//   next();
//   would be nice to figure out how to use this
// });

app.get('/', (req, res) => {
  logRequest('/', 'get');
  res.send('hey');
});

app.get('/news', (req, res) => {
  logRequest('/news', 'get');
  res.send('this is the news channel')
})


