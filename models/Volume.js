var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var VolumeSchema = new Schema({
    sets: integer,
    reps: integer,
    weight: integer
})

var Volume = mongoose.model("Volume", VolumeSchema);

module.exports = Volume;