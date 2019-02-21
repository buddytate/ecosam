import express from 'express';
import datetime from 'node-datetime';
const router = express.Router();

//routes
import users from './users/users';


router.use('/user', users);

export default router;