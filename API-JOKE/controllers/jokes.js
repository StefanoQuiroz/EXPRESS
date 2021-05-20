const Joke = require("../models/Jokes");

module.exports.findAlljokes=(req,res)=>{
    Joke.find({})
    .then(allJokes=>res.json({jokes:allJokes}))
    .catch(err=>res.json({message:"Something went wrong", error:err}))
}
module.exports.findOnejoke=(req,res)=>{
    Joke.findOne({_id:req.params.id})
    .then(oneJoke=> res.json({joke:oneJoke}))
    .catch(err=> res.json({message:"Something went wrong",error:err}))
}
module.exports.CreateJoke=(req,res)=>{
    Joke.create(req.body)
    .then(newJoke=> res.json({joke:newJoke}))
    .catch(err=> res.json({message:"Something went wrong",error:err}))
}
module.exports.UpdateJoke=(req,res)=>{
    Joke.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updateBroma=>res.json({joke:updateBroma}))
    .catch(err=>res.json({message:"Seomething went wrong",error:err}))
}
module.exports.deleteExistingJoke=(req,res)=>{
    Joke.deleteOne({_id:req.params.id})
    .then(result=>res.json({result:result}))
    .catch(err=>res.json({message:"Seomething went wrong",error:err}))
}