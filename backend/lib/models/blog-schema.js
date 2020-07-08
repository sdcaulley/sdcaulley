const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	tag: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Tag',
			required: true
		}
	],
	category: [
		{
			type: String,
			enum: ['code', 'culture', 'craft'],
			required: true
		}
	],
	date_created: {
		type: Date
	},
	date_updated: {
		type: Date
	}
});

module.exports = mongoose.model('Blog', BlogSchema);
