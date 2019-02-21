import express from 'express';
const router = express.Router();

// UTILS
import {generateToken} from '../../utils/utils';
import * as constants from '../../utils/constants';
import * as json from '../../utils/jsonHelper';

//model
//dao

router.get('/getwallet', (req, res) => {
	res.send("test");
});

export default router;