var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HistorySchema = new Schema({
    year: Number,
    month: Number,
    day: Number,
    sets: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the History model
          ref: "Sets"
        }
    ]
});

var History = mongoose.model("History", HistorySchema);

module.exports = History;