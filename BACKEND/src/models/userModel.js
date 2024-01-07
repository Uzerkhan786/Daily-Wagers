const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
     name:{
        type:String,
     },
     mobileNumber:{
        type:Number,
        required:true
     },
     password:{
        type:String,    
     },
     role:{
        type:String,
        enum:['ADMIN','CUSTOMER'],
        default:'CUSTOMER'
     },
     workBooking:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Work'
     }]
})
const user=mongoose.model('User',userSchema);
module.exports=user