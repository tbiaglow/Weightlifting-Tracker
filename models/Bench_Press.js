var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new HistorySchema object
// This is similar to a Sequelize model
var Bench_PressSchema = new Schema({
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
var Bench_Press = mongoose.model("Bench_Press", Bench_PressSchema);

// Export the History model
module.exports = Bench_Press;