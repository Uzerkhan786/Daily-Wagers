const {bookingServices}=require('../services/index');
const bookService=new bookingServices();

const createBookingController=async(req,res)=>{
    try {
        const response=await bookService.createBookingService(req.body);
        res.json({
            data:response,
            message:'successfully booked the work',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to book the work',
            success:false,
            error:error
        })
    }
}


const updateBookingController=async(req,res)=>{
    try {
        const response=await bookService.updateBookingService(req.params.id,req.body);
        res.json({
            data:response,
            message:'successfully updated the booking ',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to update the booking',
            success:false,
            error:error
        })
    }
}


const deleteBookingController=async(req,res)=>{
    try {
        const response=await bookService.deleteBookingService(req.params.id);
        res.json({
            data:response,
            message:'successfully deleted the booking',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to delete the booking',
            success:false,
            error:error
        })
    }
}

const getBookingController=async(req,res)=>{
    try {
        const response=await bookService.getBookingService(req.params.id);
        res.json({
            data:response,
            message:'successfully get  the booking',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to get the booking',
            success:false,
            error:error
        })
    }
}

const getAllBookingController=async(req,res)=>{
    try {
        const response=await bookService.getAllBookingService(req.query);
        res.json({
            data:response,
            message:'successfully get all the booking',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to get all the booking of user',
            success:false,
            error:error
        })
    }
}

module.exports={
    createBookingController,
    updateBookingController,
    deleteBookingController,
    getBookingController,
    getAllBookingController
}