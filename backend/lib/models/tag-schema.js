const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TagSchema = new Schema({
    tag: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['code', 'consciousness', 'craft'],
        required: true
    }
});

module.exports = mongoose.model('Tag', TagSchema);