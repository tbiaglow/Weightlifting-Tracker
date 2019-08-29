var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var VolumeSchema = new Schema({
    sets: Number,
    reps: Number,
    weight: Number
})

var Volume = mongoose.model("Volume", VolumeSchema);

module.exports = Volume;