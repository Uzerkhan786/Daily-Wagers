const{userServices}=require('../services/index');
const userService=new userServices();
const createUserController=async(req,res)=>{
    try {
       
        const check=await userService.getEmailVerify(req.body);
        const user=await userService.createUser(req.body);
       console.log(user);
        res.json({
            data:user,
            message:'successfully created the user',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to create the user',
            success:false,
            error:error
        })
    }
}

const loginUserController=async(req,res)=>{
    try {
        const user=await userService.checkuser(req.body);
        res.json({
            data:user,
            message:'successfully sign in  the user',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to sign in  the user',
            success:false,
            error:error
        })
    }
}

const updateUserController=async(req,res)=>{
    try {
        const user=await userService.updateUser(req.params.id,req.body);
        res.json({
            data:user,
            message:'successfully updated the user',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to update the user',
            success:false,
            error:error
        })
    }
}


const deleteUserController=async(req,res)=>{
    try {
        const user=await userService.deleteUser(req.params.id);
        res.json({
            data:user,
            message:'successfully deleted the user',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to delete the user',
            success:false,
            error:error
        })
    }
}


const getUserController=async(req,res)=>{
    try {
        const user=await userService.getUser(req.params.id);
        console.log(user);
        res.json({
            data:user,
            message:'successfully get the user',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to get a user',
            success:false,
            error:error
        })
    }
}


const getAllUserController=async(req,res)=>{
    try {
        const user=await userService.getAllUser();
        res.json({
            data:user,
            message:'successfully get all the user',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to get all  the user',
            success:false,
            error:error
        })
    }
}
module.exports={
    createUserController,
    loginUserController,
    updateUserController,
    deleteUserController,
    getUserController,
    getAllUserController
}

