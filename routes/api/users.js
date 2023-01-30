import express from 'express';
const router = express.Router();

import multer from 'multer';

import usersCtrl  from '../../controllers/users.js';

const upload = multer()
/*---------- Public Routes ----------*/
router.post('/signup', upload.single('photo'), usersCtrl.signup); //add multer to handle file submissionss
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/




export default router;