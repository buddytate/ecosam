import mongoose from 'mongoose';
let Schema = mongoose.Schema;

const UserSchema = new Schema({
	id: {type: Number, required: true, auto: true},
	wallet: Number,
});

export default mongoose.model('users', UserSchema);