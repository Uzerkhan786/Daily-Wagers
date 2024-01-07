const mongoose=require('mongoose');
const { MONGO_DB_URI } = require('./config-env');

const mongoDbConnection=async()=>{
    // try {
    //     await mongoose.connect('mongodb://localhost:27017/dailyWagers');
    //     console.log('Database is connected');
    // } catch (error) {
    //     console.log('Something went wrong',error);
    // }
    try {
        await mongoose.connect(MONGO_DB_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
         console.log('Database is connected');
    } catch (error) {
        console.log('Something went wrong',error);
    }
}
module.exports=mongoDbConnection;