const express=require('express');
const mongoDbConnection=require('./config/db')
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const routes=require('./routes/index')
const {PORT}=require('./config/config-env')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())
app.use('/api',routes);

app.listen(PORT,async()=>{
    await mongoDbConnection();
    console.log(`Server is listening at port ${PORT}`);
})