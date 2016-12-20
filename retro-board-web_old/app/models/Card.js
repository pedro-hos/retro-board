var mongoose = require('mongoose');

module.exports = function() {

  var schema = mongoose.Schema({

    type: { 
      type: String, 
      required: true,
      index: {
        unique: false
      }
    }, 

    comment: { 
      type: String,
      required: true,
    },

    insertion: {
      type: Date, 
      default: Date.now
    }
  });
  
  return mongoose.model('Card', schema);

};