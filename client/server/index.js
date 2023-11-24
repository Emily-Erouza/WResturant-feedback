const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Schemas");
const cors = require("cors");
const app = express();
app.use(cors());


// let PORT = 4000
// const url = process.env.MONGO_KEY;

// console.log(url)
// mongoose.connect(url).then(res => console.log("conntected")).catch(e => console.log("eeeee", e))





const uri = 'mongodb://emilysbongile17:Emily.20host:port/database';

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});





app.get("/users", (req, res) => {
    UserModel.find({}).then(function(users){
      res.json(users)
      
    }).catch(function(err){
      console.log(err)
  
    })
  });
  
  app.post("/users", async (req, res) => {
    try{
      const user = await new UserModel(req.body).save();
      res.send(200);
    }catch(e){
      console.log(e);
    }
  });
  
  
  app.listen(4000, () => {
    console.log("listening to port 4000");
  })
