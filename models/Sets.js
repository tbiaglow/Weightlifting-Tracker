var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SetsSchema = new Schema({
    sets: Number,
    workPerSet: [
      {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the History model
        ref: "WorkPerSet"
      }
  ]
})

// This creates our model from the above schema, using mongoose's model method
var Sets = mongoose.model("Sets", SetsSchema);

// Export the Lifts model
module.exports = Sets;