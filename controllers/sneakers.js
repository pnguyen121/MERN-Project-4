// Write functions here to do things in database

import sneaker from "../models/sneaker";

import S3 from 'aws-sdk/clients/s3.js';
// initialize the S3 constructor
const s3 = new S3()

import { v4 as uuidv4 } from 'uuid'


const BUCKET_NAME = process.env.BUCKET_NAME

export default {

}



