import express from 'express';
const router = express.Router();

import multer from 'multer';

import sneakersCtrl from '../../controllers/sneakers.js'

const upload = multer()

// Routes

// Get route to see all sneaker cards posted
router.post('/', upload.single('photo'), sneakersCtrl.create)

// GET / read all the data
router.get('/', sneakersCtrl.index)



export default router;