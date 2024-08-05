const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res
    .cookie('token', 'accessToken', {
      httpOnly: true,
      maxAge: 3456000000,
    })
    .send('cookie sent');
});

app.listen(3001, () => console.log('l@3001'));

module.exports = app;
