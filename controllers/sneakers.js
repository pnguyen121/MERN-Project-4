// Write functions here to do things in database

import Sneaker from "../models/sneaker.js";

import S3 from 'aws-sdk/clients/s3.js';
// initialize the S3 constructor
const s3 = new S3()

import { v4 as uuidv4 } from 'uuid'


const BUCKET_NAME = process.env.BUCKET_NAME

export default {
    create,
    index,
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

