const {userModel,workModel,bookingModel}=require('../models/index');

class bookingServices{

    async createBookingService(data){
        try {
            const responseUser=await userModel.findById(data.bookingUserId).populate({path:'workBooking'});
            const responseWork=await workModel.findById(data.workBookId);
            const user=await bookingModel.create({...data,price:responseWork.salary});
            responseUser.workBooking.push(responseWork);
            responseUser.save();
            console.log(responseUser);
            
            const updateWork=await workModel.findByIdAndUpdate(responseWork._id,{
                available:'not available,busy'
            })
            console.log(updateWork);
            
            return user
            if(responseUser.role=='CUSTOMER'){
                 console.log(responseWork);
            }
        } catch (error) {
            throw {error:'Unable to book the work service'}
        }
    }
    async updateBookingService(id,data){
        try {
            const book=await bookingModel.findByIdAndUpdate(id,data,{new:true});
            return book;
        } catch (error) {
            throw{error:'Something went wrong in the update booking service,please try again'}
        }
    }
    async deleteBookingService(id){
        try {
            const book=await bookingModel.findByIdAndDelete(id);
            return book;
        } catch (error) {
            throw{error:'Something went wrong in the delete booking service,please try again'}
        }
    }

    async getBookingService(id){
        try {
            const book=await bookingModel.findById(id);
            return book;
        } catch (error) {
            throw{error:'Something went wrong in the get booking service,please try again'}
        }
    }


    async getAllBookingService(data){
        try {
            const book=await bookingModel.find(data);
            return book;
        } catch (error) {
            throw{error:'Something went wrong in the get all booking service,please try again'}
        }
    }
}
module.exports=bookingServices;