var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new HistorySchema object
// This is similar to a Sequelize model
var LiftsSchema = new Schema({
    squat: integer,
    press: integer,
    deadlift: integer,
    bench_press: integer,
    power_clean: integer,
    power_snatch: integer
})

// This creates our model from the above schema, using mongoose's model method
var Lifts = mongoose.model("Lifts", LiftsSchema);

// Export the Lifts model
module.exports = Lifts;