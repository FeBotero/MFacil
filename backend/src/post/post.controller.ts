import mongoose from "mongoose"
import service from "./post.service"

function isObjectIdValid(id:any) {
    return mongoose.Types.ObjectId.isValid(id);
  }

async function findAll(req,res){
    const posts = await service.findAllPosts()
    res.send(posts)
}
async function findById(req,res){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const post = await service.findByIdPost(id)
    res.send(post)
}
async function create(req,res){
    const body = req.body
    const post = await service.createPost(body)
    res.send(post)
}
async function updateById(req,res){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    const body = req.body
    const post = await service.updatePost(id,body)
    res.send(post)
}
async function deleteByID(req,res){
    const id = req.params
    if (!isObjectIdValid(id)) {
        return res.status(404).json({ message: "ID inválido!" });
      }
    await service.deletePost(id)
    res.send({message:"Post deleted"})
}
export default {
    findAll,
    findById,
    create,
    updateById,
    deleteByID,
}