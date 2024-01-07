require('dotenv').config();
module.exports={
    PORT:process.env.PORT || 3000,
    MONGO_DB_URI:process.env.MONGO_DB_URI ,
    BASE_URL:process.env.BASE_URL
}