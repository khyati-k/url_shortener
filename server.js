"use strict"

//dependencies
const express = require("express"),
      env = require('dotenv').config();
const R=require("ramda");
const Task = require("data.task");
//Local dependencies
const Urls = require('./models/Urls')
//global configuration
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {
  const result ="enter url after /new/";
res.send(result);
});

//const url = new Urls({ url : 'https:reddit.com', short :'1'});
    
   app.get("/new/:name(*)",(req,res) => {
    console.log(req.params.name);
    //check if it's valid url
    Urls.find({ url: req.params.name},(err, a)=> {
      if (err) return console.error(err);
      //console.log(a);
      //console.log(typeof a);
      let result = a[0];
      console.log(req.originalUrl);
      res.send({"original url":result.url , "short url": `https://localhost:3000/short/${result.short}`})
    })
    })
   app.get("/short/:name(*)",(req,res) => {
//         console.log(req.params.name);
         console.log(req.originalUrl);

        Urls.find({short : req.params.name},(err,a) =>{
          //TODO add site from db
          let result =a[0];
          res.redirect(result.url);
        });
  //       //check if in db
  //       //redirect, else error
  //       //res.redirect();
      });
 
// const result = (url,short) => (url)
// ?{"original_url":url,"short_url":`http:localhost:3000/short/${short}`}
// :"invalid URL";

app.listen(PORT,()=>
console.log("server started at port %d.",PORT)
);
