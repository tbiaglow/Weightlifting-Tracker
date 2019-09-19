var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new HistorySchema object
// This is similar to a Sequelize model
var Power_CleanSchema = new Schema({
  history: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the History model
      ref: "History"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Power_Clean = mongoose.model("Power_Clean", Power_CleanSchema);

// Export the History model
module.exports = Power_Clean;