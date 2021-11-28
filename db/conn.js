const mongoose =require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
console.log('connected successfully');
}).catch((err)=>console.log('not connected'));
