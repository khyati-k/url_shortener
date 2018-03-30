const mongoose = require('mongoose');
const Schema = mongoose.schema;

//connect to db
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds121349.mlab.com:21349/short_urls`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected successfully to db")
});
//create schema
const urlSchema = mongoose.Schema({
    url:{type:String,required:false},
    short:{type:String, required:false}
});
//create model for schema
const Urls = mongoose.model('Urls', urlSchema);

module.exports = Urls
