const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResourceSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	kind: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
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

module.exports = mongoose.model('Resource', ResourceSchema);
