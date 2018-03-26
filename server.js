"use strict"

//dependencies
const express = require("express");
const R = require("ramda");
const Task = require("data.task");
const fs = require("fs");

//global configuration
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res) => {
    const result ="enter url after /new/";
	res.send(result);
});

//SHORT URL - ADD VALUE FROM DB.
//CHECK IF URL IS VALID AND IN DB.
const valid = (url) =>(url)
?{"original_url":url,"short_url":"http:localhost:3000/short/"}
:"invalid URL";

//const getParam = (name) => new Task((rej,res) => req.params.name)

//JSON ->
const main = (db) => (db)
// if req.params.name is key in db
// then return its value
//value will be put in valid and sent.

app.get("/new/:name(*)",(req,res) => {
});

app.get("/short/:name(*)",(req,res) => {
    console.log(req.params.name);
    //get original url from db using short number
    //res.redirect();
  });

app.listen(PORT,()=>
console.log("server started at port %d.",PORT)
);