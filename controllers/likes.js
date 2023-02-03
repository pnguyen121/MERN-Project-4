import Sneaker from "../models/sneaker.js";

export default {
    create,
    deleteLike
}

async function create(req, res){
 
    try {
        const sneaker = await Sneaker.findById(req.params.id);
        // push the object into the likes array
        sneaker.likes.push({username: req.user.username, userId: req.user._id}); //mutating a document
        await sneaker.save()// save it
        res.status(201).json({data: 'like added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

async function deleteLike(req, res){
    try {
        
        const sneaker = await Sneaker.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        sneaker.likes.remove(req.params.id) // mutating a document
        // req.params.id is the like id 
        await sneaker.save() // after you mutate a document you must save
        // res is an object that can respond to the client
        
        res.json({data: 'like removed'})
    } catch(err){
        res.status(400).json({err})
    }
}