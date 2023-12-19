const mongoose=require('mongoose');

const mongoDbConnection=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/dailyWagers');
        console.log('Database is connected');
    } catch (error) {
        console.log('Something went wrong',error);
    }
}
module.exports=mongoDbConnection;