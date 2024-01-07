const mongoose=require('mongoose');
var today = new Date();
var date = today.getDate()+'/'+today.getMonth()+1+'/'+today.getFullYear();
console.log(date);
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
        type:String,
        default:'Programmer'
    },
    description:{
        type:String,
        default:'coding with c++'
    },
    salary:{
        type:Number,
        default:200
    },
    date:{
        type:String,
        default:date
    },
    city:{
        type:String,
        required:true,
        default:'bhopal',
    },
    experience:{
        type:String,
        default:'1'
    },
    mobileNumber:{
        type:Number,
        required:true,
        default:9770353390
    },
    status:{
        type:String,
        enum:['available','busy'],
        default:'available'
    },

})
const work=mongoose.model('Work',workSchema);
module.exports=work