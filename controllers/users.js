import User from '../models/user.js'
import jwt from 'jsonwebtoken'
const SECRET = process.env.SECRET;

import {s3} from '../config/s3-config.js'

import { v4 as uuidv4 } from 'uuid'


const BUCKET_NAME = process.env.BUCKET_NAME
console.log(BUCKET_NAME, 'bucketname')


export default {
  signup,
  login
};


async function signup(req, res) {

  // S3 stuff for profile pic
  console.log(req.body, "<--------- contents of form req.body", req.file, '<-------- REQ.FILE')

  // force then to upload a photo
  if(!req.file) return res.status(400).json({error: 'Please Upload Profile Pic'})

  // Store the image in S3 bucket 
  const filePath = `Nike/${uuidv4()}-${req.file.originalname}`
  const params = {Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer};
  // req.file.buffer is from the form when it was sent to our express server

  // s3.upload is making the request to S3
  s3.upload(params, async function(err, data){
    if(err){
      console.log(err, '<------- error from AWS, Prob telling yo your keys arent right')
      return res.status(400).json({error: 'ERROR FROM AWS, check terminal'})
    }
  


  const user = new User({...req.body, photoUrl: data.Location}); //data.Location is the url for your image on AWS
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }

  }) //end of s3
} //end of sign up function

async function login(req, res) {
 
  try {
    const user = await User.findOne({email: req.body.email});
   
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}


