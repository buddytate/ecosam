import mongoose from 'mongoose';
import {db} from './config';

export const connection = mongoose.connect('mongodb://' + db.host + db.bddName, (err) => {

	if (err) throw err;

	console.log('Successfully connected');

});