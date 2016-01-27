var mongoose = require('mongoose');

module.exports = function() {

  var schema = mongoose.Schema({

    type: { 
      type: String, 
      required: true
    },

    message: {
      type: String, 
      required: true
    }

  });

  return mongoose.model('Card', schema);
};