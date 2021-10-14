const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');

const appareSchema = mongoose.Schema(
  {
    sizeid: {
      type: String,
      required: true,
      trim: true,
    },
    sizecode: {
      type: String,
      required: true,
      trim: true,
    },
    sortoder: {
      type: String,
      required: true,
      trim: true,
    },
    
  }

);

// add plugin that converts mongoose to json
appareSchema.plugin(toJSON);
appareSchema.plugin(paginate);



/**
 * @typedef Appare
 */
const Appare = mongoose.model('Appare', appareSchema);

module.exports = Appare;
