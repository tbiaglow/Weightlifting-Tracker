var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LiftsSchema = new Schema({
    squat: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Volume model
          ref: "Volume"
        }
    ],
    press: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Volume model
          ref: "Volume"
        }
    ],
    deadlift: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Volume model
          ref: "Volume"
        }
    ],
    bench_press: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Volume model
          ref: "Volume"
        }
    ],
    power_clean: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Volume model
          ref: "Volume"
        }
    ],
    power_snatch: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Volume model
          ref: "Volume"
        }
    ]
})

// This creates our model from the above schema, using mongoose's model method
var Lifts = mongoose.model("Lifts", LiftsSchema);

// Export the Lifts model
module.exports = Lifts;