const {workModel,userModel}=require('../models/index');
class workServices{

      async createWork(data){
        try {
            const  user=await userModel.findById(data.userId);
           console.log(user);
            const work=await workModel.create(data);
            return work;
        } catch (error) {
            throw {error:'Something went wrong in the create work services'}
        }
      }

      async updateWork(id,data){
        try {
            const user=await workModel.findByIdAndUpdate(id,data,{new:true});
            return user
        } catch (error) {
            throw {error:'Something went wrong in the update work services'}
        }
      }

      async deleteWork(id){
        try {

            const user=await workModel.findByIdAndDelete(id);
            return user
        } catch (error) {
            throw {error:'Something went wrong in the delete work services'}
        }
      }
      

      async getWork(id){
        try {
            const user=await workModel.findById(id);
            return user
        } catch (error) {
            throw {error:'Something went wrong in the get work services'}
        }
      }

      async getAllWork(data){
        try {
            const user=await workModel.find(data);
            return user;
        } catch (error) {
            throw {error:'Something went wrong in the get all work services'}
        }
      }
}
module.exports=workServices