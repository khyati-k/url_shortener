'use strict'

//dependencies
const express = require('express');
const R = require('ramda');

//global configuration
const app = express();
const PORT = process.env.PORT || 3000;

const db = {
    'google.com':'0',
    'https://google.com':'1',
    'https://www.reddit.com':'2'
};

app.get('/',(req,res) => {
    const result ='enter url after /new/';
	res.send(result);
});
//SHORT URL - ADD VALUE FROM DB.
const valid = url => db.hasOwnProperty(url) 
?{'original_url':url,'short_url':`http:localhost:3000`}
:'invalid URL';

//ISSUE - CAN'T GET HTTP:// AS PARAMS.URL
app.get('/new/:url',(req,res) => {
    console.log(req.params.url)
   const result = valid(String(req.params.url));
   res.send(result);
});

app.listen(PORT,()=>
console.log('server started at port %d.',PORT)
);