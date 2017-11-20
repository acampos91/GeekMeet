const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  game : String,
  host: { type : Schema.Types.ObjectId, ref:'User', require: true },
  city: String,
  adress : String,
  time : String,
  day : Date,
  expertiseLevel: {
    type: String,
    enum : ['Open to anyone', '+2 games played', '+10 games played', '+50 games'],
    default : 'Insufficient Players'
  },
  maxPlayers: { type : Schema.Types.ObjectId, ref:'Game', require: true },
  minPlayers: Number,
  status: {
    type: String,
    enum : ['insufficientPlayers', 'open&running', 'full'],
    default : 'insufficientPlayers'
  },
  approxDuration: String,
  description: String,
  reviews: { type : Schema.Types.ObjectId, ref:'Review', require: true },
  dressCode: String,
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
