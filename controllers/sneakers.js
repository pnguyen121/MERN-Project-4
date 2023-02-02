// Write functions here to do things in database

import Sneaker from "../models/sneaker.js";

import {s3} from '../config/s3-config.js'

import { v4 as uuidv4 } from 'uuid'


const BUCKET_NAME = process.env.BUCKET_NAME

export default {
    create,
    index,
    show,
    deleteSneaker,
}

function create(req, res) {
    console.log(req.user, " <- req.user", req.body, "<--- REQ.BODY", req.file, "<----- req.file")
  
    if(!req.file) return res.status(400).json({err: 'No file was submitted'});
  
    // generate our key for our photo on aws
    const key = `Nike/sneaker/${uuidv4()}-${req.file.originalname}`;
    const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer}
    // upload image to aws
    s3.upload(params, async function(err, data){
      console.log('========================')
      console.log(err, ' err from aws')
      console.log('========================')
      if (err) return res.status(400).json({err: 'Check terminal error from aws'})
  
      try {
        // adding our post information to the database
        const post = await Sneaker.create({
          user: req.user._id,
          sneakerName: req.body.sneakerName,
          nickname: req.body.nickname,
          styleCode: req.body.styleCode,
          price: req.body.price,
          description: req.body.description,
          photoUrl: data.Location // <- this is from aws, it is the URL that our picture exists at in s3 bucket
        })
  
        await post.populate('user')// populating on a document "post"
        // respond to the client
        res.status(201).json({post})
  
  
      } catch(err){
        res.status(400).json({err})
      }
    })// end of s3 upload  
  }


  async function index (req, res){
    try {
        // this populates the user when you find the posts
        // so you'll have access to the users information
        // when you fetch the posts
        const sneakerPosts = await Sneaker.find({}).populate("user").exec(); // populating on the model
        res.status(200).json({ data: sneakerPosts });

        console.log(sneakerPosts, "<----- index function in controllerss")
      } catch (err) {
        res.status(400).json({ err });
      }
  }



  async function show(req, res){
    try {
      // First find the user using the params from the request
      // findOne finds first match, its useful to have unique usernames!
      // Then find all the posts that belong to that user
      const sneaker = await Sneaker.findOne({sneakerName: req.params.sneakerName});
      if(!sneaker) return res.status(400).json({error: 'Sneaker not foundd'})
      console.log(sneaker, '<---- sneaker on show sneaker function')
      res.status(200).json({data: sneaker})
    } catch(err){
      console.log(err)
      res.status(400).json({err})
    }
  }



//   Delete function

  async function deleteSneaker(req, res){
    try {
        await Sneaker.findByIdAndDelete(req.params.id);
        res.json({ data: 'sneaker deleted' })
    } catch (err) {
        res.status(400).json({ err });
    }
  }
