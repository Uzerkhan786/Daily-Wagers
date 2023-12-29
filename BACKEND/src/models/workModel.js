const mongoose=require('mongoose');

const workSchema=new mongoose.Schema({
    
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    workType:{
        type:String,
        default:'Labour',
        required:true
    },
    workName:{
        type:String
    },
    description:{
        type:String,
    },
    salary:{
        type:Number,
        default:200
    },
    date:{
        type:Date,
        default:Date.now
    },
    city:{
        type:String,
        default:'bhopal',
        required:true
    },
    experience:{
        type:String,
        default:'1'
    },
    available:{
        type:String,
        enum:['available','not available,busy'],
        default:'available'
    }

})
const work=mongoose.model('Work',workSchema);
module.exports=work