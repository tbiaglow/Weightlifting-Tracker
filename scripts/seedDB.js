const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const noviceSeed = [
  {
    id: 1,
    name: "novice_ex",
    history: [{
      year: 2019,
      month: 1,
      day: 1,
      lifts: [{
        squat: [{
          sets: 3,
          reps: 5,
          weight: 135
        }],
        press: [{
          sets: 3,
          reps: 5,
          weight: 65
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 135
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 3,
      lifts: [{
        squat: [{
          sets: 3,
          reps: 5,
          weight: 140
        }],
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 95
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 145
        }]
      }]
    }]
  }
]
//   {
//     id: 1,
//     name: "novice_ex",
//     history: [{
//       year: 2019,
//       month: 1,
//       day: 3,
//       lifts: [{
//         squat: [{
//           sets: 3,
//           reps: 5,
//           weight: 140
//         }],
//         bench_press: [{
//           sets: 3,
//           reps: 5,
//           weight: 95
//         }],
//         deadlift: [{
//           sets: 1,
//           reps: 5,
//           weight: 145
//         }]
//       }]
//     }]
//   }
// ]
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 5,
//     squat: {sets: 3, reps: 5, weight: 145},
//     press: {sets: 3, reps: 5, weight: 70},
//     deadlift: {sets: 1, reps: 5, weight: 155}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 8,
//     squat: {sets: 3, reps: 5, weight: 150},
//     bench_press: {sets: 3, reps: 5, weight: 100},
//     deadlift: {sets: 1, reps: 5, weight: 160}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 10,
//     squat: {sets: 3, reps: 5, weight: 155},
//     press: {sets: 3, reps: 5, weight: 75},
//     deadlift: {sets: 1, reps: 5, weight: 165}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 12,
//     squat: {sets: 3, reps: 5, weight: 160},
//     bench_press: {sets: 3, reps: 5, weight: 105},
//     deadlift: {sets: 1, reps: 5, weight: 170}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 15,
//     squat: {sets: 3, reps: 5, weight: 165},
//     press: {sets: 3, reps: 5, weight: 80},
//     deadlift: {sets: 1, reps: 5, weight: 175}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 17,
//     squat: {sets: 3, reps: 5, weight: 170},
//     bench_press: {sets: 3, reps: 5, weight: 110},
//     deadlift: {sets: 1, reps: 5, weight: 180}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 19,
//     squat: {sets: 3, reps: 5, weight: 175},
//     press: {sets: 3, reps: 5, weight: 85},
//     deadlift: {sets: 1, reps: 5, weight: 185}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 22,
//     squat: {sets: 3, reps: 5, weight: 180},
//     bench_press: {sets: 3, reps: 5, weight: 115},
//     deadlift: {sets: 1, reps: 5, weight: 190}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 24,
//     squat: {sets: 3, reps: 5, weight: 185},
//     press: {sets: 3, reps: 5, weight: 90},
//     deadlift: {sets: 1, reps: 5, weight: 195}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 26,
//     squat: {sets: 3, reps: 5, weight: 190},
//     bench_press: {sets: 3, reps: 5, weight: 120},
//     deadlift: {sets: 1, reps: 5, weight: 200}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 29,
//     squat: {sets: 3, reps: 5, weight: 195},
//     press: {sets: 3, reps: 5, weight: 95},
//     power_clean: {sets: 5, reps: 3, weight: 95}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 1,
//     day: 31,
//     squat: {sets: 3, reps: 5, weight: 200},
//     bench_press: {sets: 3, reps: 5, weight: 125},
//     deadlift: {sets: 1, reps: 5, weight: 205}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 2,
//     squat: {sets: 3, reps: 5, weight: 205},
//     press: {sets: 3, reps: 5, weight: 100},
//     power_clean: {sets: 5, reps: 3, weight: 100}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 5,
//     squat: {sets: 3, reps: 5, weight: 210},
//     bench_press: {sets: 3, reps: 5, weight: 130},
//     deadlift: {sets: 1, reps: 5, weight: 210},
//     failed_lifts: ["squat"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 7,
//     squat: {sets: 3, reps: 5, weight: 190},
//     press: {sets: 3, reps: 5, weight: 105},
//     power_clean: {sets: 5, reps: 3, weight: 105},
//     failed_lifts: ["press"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 9,
//     squat: {sets: 3, reps: 5, weight: 195},
//     bench_press: {sets: 3, reps: 5, weight: 135},
//     deadlift: {sets: 1, reps: 5, weight: 215}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 12,
//     squat: {sets: 3, reps: 5, weight: 200},
//     press: {sets: 3, reps: 5, weight: 95},
//     power_clean: {sets: 5, reps: 3, weight: 110},
//     failed_lifts: ["power_clean"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 14,
//     squat: {sets: 3, reps: 5, weight: 205},
//     bench_press: {sets: 3, reps: 5, weight: 140},
//     deadlift: {sets: 1, reps: 5, weight: 220},
//     failed_lifts: ["bench_press"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 16,
//     squat: {sets: 3, reps: 5, weight: 210},
//     press: {sets: 3, reps: 5, weight: 100},
//     power_clean: {sets: 5, reps: 3, weight: 100}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 19,
//     squat: {sets: 3, reps: 5, weight: 215},
//     bench_press: {sets: 3, reps: 5, weight: 125},
//     deadlift: {sets: 1, reps: 5, weight: 225}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 21,
//     squat: {sets: 3, reps: 5, weight: 195},
//     press: {sets: 3, reps: 5, weight: 105},
//     power_clean: {sets: 5, reps: 3, weight: 105}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 23,
//     squat: {sets: 3, reps: 5, weight: 220},
//     bench_press: {sets: 3, reps: 5, weight: 130},
//     deadlift: {sets: 1, reps: 5, weight: 230}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 26,
//     squat: {sets: 3, reps: 5, weight: 225},
//     press: {sets: 3, reps: 5, weight: 110},
//     power_clean: {sets: 5, reps: 3, weight: 110}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 2,
//     day: 28,
//     squat: {sets: 3, reps: 5, weight: 205},
//     bench_press: {sets: 3, reps: 5, weight: 135},
//     deadlift: {sets: 1, reps: 5, weight: 235},
//     failed_lifts: ["deadlift"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 2,
//     squat: {sets: 3, reps: 5, weight: 230},
//     press: {sets: 3, reps: 5, weight: 115},
//     power_clean: {sets: 5, reps: 3, weight: 115}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 5,
//     squat: {sets: 3, reps: 5, weight: 235},
//     bench_press: {sets: 3, reps: 5, weight: 140},
//     deadlift: {sets: 1, reps: 5, weight: 210},
//     failed_lifts: ["squat"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 7,
//     squat: {sets: 3, reps: 5, weight: 210},
//     press: {sets: 3, reps: 5, weight: 120},
//     power_clean: {sets: 5, reps: 3, weight: 120},
//     failed_lifts: ["press"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 9,
//     squat: {sets: 3, reps: 5, weight: 215},
//     bench_press: {sets: 3, reps: 5, weight: 145},
//     deadlift: {sets: 1, reps: 5, weight: 215}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 12,
//     squat: {sets: 3, reps: 5, weight: 220},
//     press: {sets: 3, reps: 5, weight: 110},
//     power_clean: {sets: 5, reps: 3, weight: 125},
//     failed_lifts: ["power_clean"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 14,
//     squat: {sets: 3, reps: 5, weight: 200},
//     bench_press: {sets: 3, reps: 5, weight: 150},
//     deadlift: {sets: 1, reps: 5, weight: 220}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 16,
//     squat: {sets: 3, reps: 5, weight: 225},
//     press: {sets: 3, reps: 5, weight: 115},
//     power_clean: {sets: 5, reps: 3, weight: 110}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 19,
//     squat: {sets: 3, reps: 5, weight: 230},
//     bench_press: {sets: 3, reps: 5, weight: 155},
//     deadlift: {sets: 1, reps: 5, weight: 225},
//     failed_lifts: ["bench_press"]
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 21,
//     squat: {sets: 3, reps: 5, weight: 205},
//     press: {sets: 3, reps: 5, weight: 120},
//     power_clean: {sets: 5, reps: 3, weight: 115}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 23,
//     squat: {sets: 3, reps: 5, weight: 235},
//     bench_press: {sets: 3, reps: 5, weight: 140},
//     deadlift: {sets: 1, reps: 5, weight: 230}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 26,
//     squat: {sets: 3, reps: 5, weight: 240},
//     press: {sets: 3, reps: 5, weight: 125},
//     power_clean: {sets: 5, reps: 3, weight: 120}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 28,
//     squat: {sets: 3, reps: 5, weight: 215},
//     bench_press: {sets: 3, reps: 5, weight: 145},
//     deadlift: {sets: 1, reps: 5, weight: 235}
//   },
//   {
//     id: 1,
//     name: "novice_ex",
//     year: 2019,
//     month: 3,
//     day: 30,
//     squat: {sets: 3, reps: 5, weight: 245},
//     press: {sets: 3, reps: 5, weight: 130},
//     power_clean: {sets: 5, reps: 3, weight: 125},
//     failed_lifts: ["press"]
// }];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(noviceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });