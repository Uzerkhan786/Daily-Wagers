const express=require('express');
const {userControllers,workConrollers,bookingControllers}=require('../../controllers/index');

const router=express.Router();

//USER ROUTES
router.post('/user/signup',userControllers.createUserController);
router.post('/user/signin',userControllers.loginUserController);
router.patch('/user/:id',userControllers.updateUserController);
router.delete('/user/:id',userControllers.deleteUserController)
router.get('/user/:id',userControllers.getUserController)
router.get('/user',userControllers.getAllUserController);


//Work Routes
router.post('/work',workConrollers.createWorkController);
router.patch('/work/:id',workConrollers.updateWorkController);
router.delete('/work/:id',workConrollers.deleteWorkController)
router.get('/work/:id',workConrollers.getWorkController)
router.get('/work',workConrollers.getAllWorkController);


//Booking Routes
router.post('/book',bookingControllers.createBookingController);
router.patch('/book/:id',bookingControllers.updateBookingController);
router.delete('/book/:id',bookingControllers.deleteBookingController);
router.get('/book/:id',bookingControllers.getBookingController)
router.get('/book',bookingControllers.getAllBookingController);

module.exports=router