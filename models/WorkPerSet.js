var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var WorkPerSetSchema = new Schema({
    reps: Number,
    weight: Number,
    RPE: Number
})

var WorkPerSet = mongoose.model("WorkPerSet", WorkPerSetSchema);

module.exports = WorkPerSet;