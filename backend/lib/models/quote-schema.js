const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuoteSchema = new Schema({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  reference: {
    type: String
  },
  category: [{
    type: String,
    enum: ['code', 'consciousness', 'craft'],
    required: true
  }]
});

module.exports = mongoose.model('Quote', QuoteSchema);
