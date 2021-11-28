const dotenv  = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// database connection
dotenv.config({path:'./config.env'});
require("./db/conn");
// const DB='mongodb+srv://sachin:skks1998@cluster0.5qo6s.mongodb.net/mernstack?retryWrites=true&w=majority';

PORT= process.env.PORT;


//middleware 
const middleware=(req,res,next)=>{
    console.log('middleware');
    next();
}

//home page route........
app.get('/',(req,res)=>{
    res.send(`hello from server`);
});
// about page route........
app.get('/about',middleware,(req,res)=>{
    res.send(`about from server`);
});
// contact page route........ 
app.get('/contact',(req,res)=>{
    res.send(`hello contact from server`);
});
// sign in page route........
app.get('/sign in',(req,res)=>{
    res.send(`hello sign in from server`);
});
//login page route........
app.get('/login',(req,res)=>{
    res.send(`hello login from server`);
});

 




app.listen(PORT,()=>{
  console.log(`server is running at port no ${PORT}`);  
});