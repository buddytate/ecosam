import express from 'express';
import datetime from 'node-datetime';
const router = express.Router();

//routes
import users from './users/users';
import bins from './bin/bin';


router.use('/user', users);
router.use('/bin', bins)

export default router;