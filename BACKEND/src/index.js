const express=require('express');
const mongoDbConnection=require('./config/db')

const bodyParser=require('body-parser');
const {PORT}=require('./config/config-env')
const app=express();
app.listen(PORT,async()=>{
    await mongoDbConnection();
    console.log(`Server is listening at port ${PORT}`);
})