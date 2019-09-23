const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const noviceSeed = new db.User(
    {
      id: 1,
      name: "novice_ex",
      password: "1234",
      squat: {
        history: [{
          year: 2019,
          month: 1,
          day: 1,
          sets: [{
            sets: 3,
            workPerSet: {
              reps: 5,
              weight: 135
            }
          }]
        }]
      },
      press: {
        history: [{
          year: 2019,
          month: 1,
          day: 1,
          sets: [{
            sets: 3,
            workPerSet: {
              reps: 5,
              weight: 65
            }
          }]
        }]
      }
    }
)


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