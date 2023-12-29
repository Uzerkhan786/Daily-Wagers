const {workServices}=require('../services/index');
const workService=new workServices();

const createWorkController=async(req,res)=>{
    try {
        const response=await workService.createWork(req.body);
        res.json({
            data:response,
            message:'successfully created the work',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to create the work',
            success:false,
            error:error
        })
    }
}


const updateWorkController=async(req,res)=>{
    try {
        const response=await workService.updateWork(req.params.id,req.body);
        res.json({
            data:response,
            message:'successfully updated the work',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to update the work',
            success:false,
            error:error
        })
    }
}


const deleteWorkController=async(req,res)=>{
    try {
        const response=await workService.deleteWork(req.params.id);
        res.json({
            data:response,
            message:'successfully deleted the work',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to delete the work',
            success:false,
            error:error
        })
    }
}

const getWorkController=async(req,res)=>{
    try {
        const response=await workService.getWork(req.params.id);
        res.json({
            data:response,
            message:'successfully get  the work',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to get the work',
            success:false,
            error:error
        })
    }
}

const getAllWorkController=async(req,res)=>{
    try {
        const response=await workService.getAllWork(req.query);
        res.json({
            data:response,
            message:'successfully get all the work',
            success:true,
            error:{}
        })
    } catch (error) {
        res.json({
            data:{},
            message:'Unable to get all the work',
            success:false,
            error:error
        })
    }
}

module.exports={
    createWorkController,
    updateWorkController,
    deleteWorkController,
    getWorkController,
    getAllWorkController
}