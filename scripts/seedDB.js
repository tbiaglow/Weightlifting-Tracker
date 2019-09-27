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
    name: "novice_ex",
    password: "1234",
    squat: [{
      history: [{
        year: 2019,
        month: 1,
        day: 1,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 135
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 3,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 140
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 5,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 145
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 8,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 150
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 10,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 155
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 12,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 160
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 15,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 165
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 17,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 170
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 19,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 175
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 22,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 180
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 24,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 185
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 26,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 190
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 29,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 195
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 31,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 200
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 2,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 205
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 5,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 210
            //failed
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 7,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 190
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 9,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 195
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 12,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 200
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 14,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 205
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 16,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 210
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 19,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 215
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 21,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 195
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 23,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 220
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 26,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 225
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 28,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 205
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 2,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 230
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 5,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 235
            //failed
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 7,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 210
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 9,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 215
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 12,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 220
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 14,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 200
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 16,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 225
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 19,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 230
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 21,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 205
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 23,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 235
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 26,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 240
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 28,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 215
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 30,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 245
          }]
        }]
      }]
    }],
    press: [{
      history: [{
        year: 2019,
        month: 1,
        day: 1,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 65
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 5,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 70
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 10,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 75
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 15,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 80
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 19,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 85
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 24,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 90
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 29,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 95
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 2,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 100
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 7,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 105
            //failed
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 12,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 95
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 16,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 100
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 21,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 105
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 26,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 110
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 2,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 115
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 7,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 120
            //failed
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 12,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 110
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 16,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 115
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 21,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 120
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 26,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 125
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 30,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 130
            // failed
          }]
        }]
      }]
    }],
    deadlift: [{
      history: [{
        year: 2019,
        month: 1,
        day: 1,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 135
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 3,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 145
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 5,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 155
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 8,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 160
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 10,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 165
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 12,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 170
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 15,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 175
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 17,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 180
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 19,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 185
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 22,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 190
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 24,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 195
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 26,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 200
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 31,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 205
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 5,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 210
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 9,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 215
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 14,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 220
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 19,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 225
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 23,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 230
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 28,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 235
            // failed
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 5,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 210
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 9,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 215
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 14,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 220
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 19,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 225
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 23,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 230
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 28,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 235
          }]
        }]
      }
    ]
    }],
    bench_press: [{
      history: [{
        year: 2019,
        month: 1,
        day: 3,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 95
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 8,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 100
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 12,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 105
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 17,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 110
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 22,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 115
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 26,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 120
          }]
        }]
      },
      {
        year: 2019,
        month: 1,
        day: 31,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 125
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 5,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 130
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 9,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 135
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 14,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 140
            // failed
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 19,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 125
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 23,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 130
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 28,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 135
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 5,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 140
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 9,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 145
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 14,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 150
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 19,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 155
            // failed
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 23,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 140
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 28,
        sets: [{
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 145
          }]
        }]
      }
    ]
    }],
    power_clean: [{
      history: [{
        year: 2019,
        month: 1,
        day: 29,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 95
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 2,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 100
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 7,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 105
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 12,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 110
            // failed
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 16,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 100
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 21,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 105
          }]
        }]
      },
      {
        year: 2019,
        month: 2,
        day: 26,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 110
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 2,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 115
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 7,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 120
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 12,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 125
            // failed
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 16,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 110
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 21,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 115
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 26,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 120
          }]
        }]
      },
      {
        year: 2019,
        month: 3,
        day: 30,
        sets: [{
          sets: 5,
          workPerSet: [{
            reps: 3,
            weight: 125
          }]
        }]
      }
    ]
    }]
  }
]

// The sample "intermediate" starts "The Bridge" on Monday, June 3rd, with the following maxes:
// Squat: 245 5RM, estimated 285 1RM
// Press: 130 5RM, estimated 150 1RM
// Deadlift: 285 5RM, estimated 330 1RM
// Bench Press: 165 5RM, estimated 190 1RM
const intermediateSeed = [
  {
    id: 2,
    name: "intermediate_ex",
    password: "1234",
    squat: [{
      history: [{
        year: 2019,
        month: 6,
        day: 3,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 215,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 225,
            RPE: 7
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 230,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 10,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 220,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 230,
            RPE: 7
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 240,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 17,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 225,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 235,
            RPE: 7 
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 240,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 24,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 230,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 235,
            RPE: 7
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 5,
            weight: 245,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 1,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 4,
            weight: 230,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 4,
            weight: 240,
            RPE: 7
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 4,
            weight: 250,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 8,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 275,
            RPE:8
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 4,
            weight: 255,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 15,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 280,
            RPE: 8
          }],
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 3,
            weight: 260,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 22,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 285, // => 310 1RM
            RPE: 8
          }]
        },
        {
          sets: 2,
          workPerSet: [{
            reps: 3,
            weight: 265,
            RPE: 8
          }]
        }]
      }
    ]
    }],
    press: [{
      history: [{
        year: 2019,
        month: 6,
        day: 5,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 110,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 117.5,
            RPE: 7
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 122.5,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 12,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 115,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 120,
            RPE: 7
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 5,
            weight: 125,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 19,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 117.5,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 122.5,
            RPE: 7
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 5,
            weight: 127.5,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 26,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 120,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 125,
            RPE: 7
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 5,
            weight: 130,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 3,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 4,
            weight: 120,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 4,
            weight: 125,
            RPE: 7
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 4,
            weight: 132.5,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 10,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 152.5,
            RPE: 8
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 4,
            weight: 130,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 17,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 155,
            RPE: 8
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 3,
            weight: 137.5,
            RPE: 9
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 24,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 157.5, // => 170 1RM
            RPE: 8
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 3,
            weight: 140,
            RPE: 9
          }]
        }]
      }]
    }],
    deadlift: [{
      history: [{
        year: 2019,
        month: 6,
        day: 7,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 240,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 250,
            RPE: 7
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 265,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 14,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 245,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 255,
            RPE: 7
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 270,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 21,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 250,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 260,
            RPE: 7
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 275,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 28,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 255,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 265,
            RPE: 7
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 5,
            weight: 280,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 5,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 4,
            weight: 275,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 4,
            weight: 285,
            RPE: 7
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 4,
            weight: 295,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 12,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 325,
            RPE: 8
          }]
        },
        {
          sets: 3,
          workPerSet: [{
            reps: 4,
            weight: 300,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 19,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 330,
            RPE: 8
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 3,
            weight: 305,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 26,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 335, // => 365 1RM
            RPE: 8
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 3,
            weight: 325,
            RPE: 9
          }]
        }]
      }]
    }],
    bench_press: [{
      history: [{
        year: 2019,
        month: 6,
        day: 7,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 135,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 145,
            RPE: 7
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 155,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 14,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 140,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 150,
            RPE: 7
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 5,
            weight: 160,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 21,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 145,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 155,
            RPE: 7
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 5,
            weight: 165,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 6,
        day: 28,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 150,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 5,
            weight: 160,
            RPE: 7
          }]
        },
        {
          sets: 5,
          workPerSet: [{
            reps: 5,
            weight: 170,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 5,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 4,
            weight: 155,
            RPE: 6
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 4,
            weight: 165,
            RPE: 7
          }]
        },
        {
          sets: 5,
          workPerSet: [{
            reps: 4,
            weight: 175,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 12,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 200,
            RPE: 8
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 4,
            weight: 180,
            RPE: 8
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 19,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 205,
            RPE: 8
          }]
        },
        {
          sets: 4,
          workPerSet: [{
            reps: 3,
            weight: 175,
            RPE: 9
          }]
        }]
      },
      {
        year: 2019,
        month: 7,
        day: 26,
        sets: [{
          sets: 1,
          workPerSet: [{
            reps: 1,
            weight: 210, // => 225 1RM
            RPE: 8
          }]
        },
        {
          sets: 1,
          workPerSet: [{
            reps: 3,
            weight: 185,
            RPE: 9
          }]
        }]
      }]
    }]
  }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(noviceSeed))
  .then(() => db.User.collection.insertMany(intermediateSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });