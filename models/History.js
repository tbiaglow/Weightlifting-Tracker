var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new HistorySchema object
// This is similar to a Sequelize model
var HistorySchema = new Schema({
    year: Number,
    month: Number,
    day: Number,
    lifts: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the History model
          ref: "Lifts"
        }
    ]
});

// This creates our model from the above schema, using mongoose's model method
var History = mongoose.model("History", HistorySchema);

// Export the History model
module.exports = History;