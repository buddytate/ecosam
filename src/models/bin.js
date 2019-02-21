import mongoose from 'mongoose';
let Schema = mongoose.Schema;

const BinSchema = new Schema({
	id: Number,
	latitude: Number,
	longitude: Number,
}, { _id: false });

export default mongoose.model('bins', BinSchema);