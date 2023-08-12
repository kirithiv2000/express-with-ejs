const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/contacts_list_db');

const db =  mongoose.connection;

db.on('error', err => {
    
    console.error(err);
  });
// up and running print the message
db.once("open",()=>{
    console.log("successfully connected")
})