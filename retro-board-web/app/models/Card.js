var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

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

  schema.plugin(findOrCreate);
  return mongoose.model('Card', schema);

};