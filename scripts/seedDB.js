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
        day: 2,
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
            weight: 95
          }]
        }]
      }
    ]
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
      }]
    }]
  }




    {
      year: 2019,
      month: 1,
      day: 3,
      lifts: [{
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
    },
    {
      year: 2019,
      month: 1,
      day: 5,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 70
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 155
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 8,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 100
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 160
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 10,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 75
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 165
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 12,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 105
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 170
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 15,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 80
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 175
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 17,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 110
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 180
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 19,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 85
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 185
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 22,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 115
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 190
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 24,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 90
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 195
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 26,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 120
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 200
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 29,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 95
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 95
        }]
      }]
    },
    {
      year: 2019,
      month: 1,
      day: 31,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 125
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 205
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 2,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 100
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 100
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 5,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 130
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 210
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 7,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 105 // failed
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 105
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 9,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 135
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 215
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 12,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 95
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 110 // failed
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 14,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 140 // failed
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 220
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 16,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 100
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 100
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 19,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 125
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 225
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 21,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 105
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 105
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 23,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 130
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 230
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 26,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 110
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 110
        }]
      }]
    },
    {
      year: 2019,
      month: 2,
      day: 28,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 135
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 235 // failed
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 2,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 115
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 115
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 5,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 140
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 210
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 7,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 120 // failed
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 120
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 9,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 145
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 215
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 12,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 110
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 125 // failed
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 14,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 150
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 220
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 16,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 115
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 110
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 19,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 155 // failed
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 225
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 21,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 120
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 115
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 23,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 140
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 230
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 26,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 125
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 120
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 28,
      lifts: [{
        bench_press: [{
          sets: 3,
          reps: 5,
          weight: 145
        }],
        deadlift: [{
          sets: 1,
          reps: 5,
          weight: 235
        }]
      }]
    },
    {
      year: 2019,
      month: 3,
      day: 30,
      lifts: [{
        press: [{
          sets: 3,
          reps: 5,
          weight: 130 // failed
        }],
        power_clean: [{
          sets: 5,
          reps: 3,
          weight: 125
        }]
      }]
    }
  ]
  }
]

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