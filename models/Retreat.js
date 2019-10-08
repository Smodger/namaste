const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Do we need fully booked?
// how do we set up room stuff etc?

const retreatSchema = new Schema({
  name : { type : String },
  dateStart : { type: String },
  dateEnd : { type : String },
  retreatSummary : { type : String },
  costOverview : { type : String },
  accomodationOverview : { type : String},
  // MAKE BEDROOMS AN ARRAY TO LOOP THROUGH
  bedRooms :{
    booked : { type : Boolean , default : false },
    description : { type : String },
    costPerPerson : { type : Number }
  },
  food : { type : String },
  byCar : { type : String },
  byTrain : { type : String },
  bookingDetails : { type : String },
  bookingUrl : { type : String },
  whatsIncluded : [ String ]
});

module.exports = mongoose.model('Retreat', retreatSchema);
