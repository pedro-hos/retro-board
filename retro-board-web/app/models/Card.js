var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    
    type: { 
      type: String, 
      required: true
    },

    comments: {
      type: String, 
      required: true, 
      index: {
        unique: false
      }
    }

  });

  return mongoose.model('Card', schema);
};