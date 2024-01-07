const mongoose=require('mongoose');

const bookingSchema=new mongoose.Schema({
    
    bookingUserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    workBookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Work',
        required:true
    },
    workBookDetail:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Work',
        required:true
    }]
})
const booking=mongoose.model('Booking',bookingSchema);
module.exports=booking