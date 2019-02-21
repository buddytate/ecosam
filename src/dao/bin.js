import mongoose from 'mongoose';
mongoose.Promise = Promise;

import connection from '../config/connection';
import Bin from '../models/bin';

export function findAll() {
	return Bin.find().then((all) => {
		return all;
	}).catch((err) => {
		return err;
	});
}

export function create(bin) {
	return bin.save().then(() => {
		return bin;
	}).catch((err) => {
		return err;
	});
}