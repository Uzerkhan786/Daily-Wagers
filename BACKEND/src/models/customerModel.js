const mongoose=require('mongoose');

const customerSchema=new mongoose.Schema({
    userRole:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
})
const customer=mongoose.model('Customer',customerSchema);
module.exports=customer