

// dependencies
const express = require('express'),
  env = require('dotenv').config(),
  randomize = require('randomatic');

// Local dependencies
const Urls = require('./models/Urls');
// global configuration
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const result = 'enter url after /new/';
  res.send(result);
});

app.get('/new/:name(*)', (req, res) => {
  console.log(req.params.name);
  // check if it's valid url
  Urls.find({ url: req.params.name })
    .then(a => {
    const result = a[0];
    res.send({ 'original url': result.url, 'short url': `${req.protocol}://${req.get('host')}/short/${result.short}` });
  })
  .catch(err =>{
    let u = req.params.name
      const s = new Urls({ url: u, short:randomize('0',4)});
      s.save((e,s) => console.log('added to db'));
    });
});
app.get('/short/:name(*)', (req, res) => {
  Urls.find({ short: req.params.name }, (err, a) => {
    // TODO add site from db
    const result = a[0];
    res.redirect(result.url);
  });
});

app.listen(PORT, () =>
  console.log('server started at port %d.', PORT),
);
