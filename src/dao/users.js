import mongoose from 'mongoose';
mongoose.Promise = Promise;

import connection from '../config/connection';
import User from '../models/user';


export function create(user) {
	return user.save().then(() => {
		return user;
	}).catch((err) => {
		return err;
	});
}

export function findAll() {
	return User.find().then((all) => {
		return all;
	}).catch((err) => {
		return err;
	});
}

export function findById(userId) {
	return User.findOne({id: userId}).then((match) => {
		return match;
	}).catch((err) => {
		return err;
	});
}
