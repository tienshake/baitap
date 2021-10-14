const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const lopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
   
    numberStudent: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

lopSchema.plugin(toJSON);
lopSchema.plugin(paginate);



/**
 * @typedef Lop
 */
const Lop = mongoose.model('Lop', lopSchema);

module.exports = Lop;
