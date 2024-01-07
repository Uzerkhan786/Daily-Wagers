const {userModel}=require('../models/index')

class userServices{

       async createUser(data){
        try {
            const user=await userModel.create(data)    
            return user;
        } catch (error) {
            throw{error:'Something went wrong in the services,Unable to create the user'}
        }         
       }

       async updateUser(id,data){
        try {
            const user=await userModel.findByIdAndUpdate(id,data,{new:true})    
            return user;
        } catch (error) {
            throw{error:'Something went wrong in the services,Unable to update the user'}
        }         
       }
       async getEmailVerify(data){
        try {
            
            const user=await userModel.findOne({mobileNumber:data.mobileNumber});
            console.log(user);
            if(user!==null){
                    console.log('Mobile number is already there,please sign in');
                     throw {error:'mobile number is already registered for this user'}
            }
            console.log('bhai');    
            return true;
        } catch (error) {
            throw {error:'Unable to get the thing'}
        }
       }

       async checkuser(data){
             try {
                const user=await userModel.findOne({mobileNumber:data.mobileNumber});
                if(!(user)){
                    throw error
                }
                return user;
             } catch (error) {
                throw{error:'No user exist with this number'}
             }
       }

       async deleteUser(data){
        try {
            const user=await userModel.findByIdAndDelete(data)    
            return user;
        } catch (error) {
            throw{error:'Something went wrong in the services,Unable to delete the user'}
        }         
       }

       async getUser(data){
        try {
            const user=await userModel.findById(data).populate({path:'workBooking'})    
            return user;
        } catch (error) {
            throw{error:'Something went wrong in the services,Unable to get a user'}
        }         
       }


       async getAllUser(){
        try {
            const user=await userModel.find()    
            return user;
        } catch (error) {
            throw{error:'Something went wrong in the services,Unable to get all the user'}
        }         
       }

}
module.exports=userServices