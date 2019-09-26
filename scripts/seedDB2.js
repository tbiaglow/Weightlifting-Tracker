const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/weightlifting_db"
);

const noviceSeed = [
    {
      id: 1,
      name: "Tom",
      password: "1234",
      squat: [{
        history: [{
          year: 2019,
          month: 9,
          day: 19,
          sets: [{
            sets: 1,
            workPerSet: [{
              reps: 5,
              weight: 315
            }]
          }]
        }]
      }],
      press: [{
        history: [{
          year: 2019,
          month: 9,
          day: 27,
          sets: [{
            sets: 10,
            workPerSet: [{
              reps: 1,
              weight: 152.5
            }]
          }]
        }]
      }]
    }
  ]


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(noviceSeed))
  // .then(() => db.User.collection.insertMany(intermediateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });