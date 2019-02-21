import express from 'express';
const router = express.Router();

// UTILS
import {generateToken} from '../../utils/utils';
import * as constants from '../../utils/constants';
import * as json from '../../utils/jsonHelper';


// MODELS
import User from '../../models/user';

// DAO
import * as dao from '../../dao/users';

router.get('/getWallet/:id', (req, res) => {
	dao.findById(req.params.id).then((user) => {
		if (user != null) {
			res.status(200).json({wallet: user.wallet});
		} else {
			json.handleError(constants.CODE_400, res);
		}
		
	})
});

export default router;