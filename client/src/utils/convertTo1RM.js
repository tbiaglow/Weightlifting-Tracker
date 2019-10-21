// Function to convert weight at a given # of reps and RPE to a 1RM, RPE 10 estimate
function convertTo1RM (array) {
    var oneRMArray = [];
    for (var i = 0; i < array.all.length; i++) {
      var oneRMMax = 0;
      for (var j = 0; j < array.all[i].sets.length; j++) {
        if (array.all[i].sets[j].workPerSet[0].RPE) {
          switch (array.all[i].sets[j].workPerSet[0].RPE) {
            case 10:
              if (array.all[i].sets[j].workPerSet[0].reps === 1){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 2){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.96
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 3){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.92
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 4){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.89
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 5){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.86
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 6){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.84
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 7){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.81
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 8){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.79
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 9){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.76
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 10){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.74
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              break;
            case 9.5: 
              if (array.all[i].sets[j].workPerSet[0].reps === 1){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.98
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 2){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.94
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 3){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.91
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 4){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.88
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 5){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.85
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 6){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.82
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 7){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.8
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 8){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.77
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 9){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.75
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 10){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.72
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              break;
            case 9:        
              if (array.all[i].sets[j].workPerSet[0].reps === 1){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.96
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 2){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.92
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 3){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.89
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 4){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.86
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 5){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.84
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 6){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.81
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 7){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.79
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 8){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.76
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 9){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.74
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 10){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.71
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              break;
            case 8.5:        
              if (array.all[i].sets[j].workPerSet[0].reps === 1){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.94
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 2){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.91
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 3){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.88
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 4){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.85
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 5){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.82
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 6){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.8
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 7){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.77
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 8){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.75
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 9){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.72
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 10){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.69
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              break;
            case 8:        
              if (array.all[i].sets[j].workPerSet[0].reps === 1){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.92
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 2){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.89
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 3){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.86
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 4){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.84
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 5){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.81
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 6){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.79
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 7){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.76
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 8){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.74
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 9){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.71
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 10){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.68
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              break;
            case 7.5:        
              if (array.all[i].sets[j].workPerSet[0].reps === 1){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.91
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 2){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.88
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 3){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.85
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 4){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.82
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 5){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.8
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 6){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.77
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 7){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.75
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 8){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.72
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 9){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.69
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 10){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.67
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              break;
            case 7:        
              if (array.all[i].sets[j].workPerSet[0].reps === 1){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.89
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 2){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.86
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 3){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.84
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 4){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.81
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 5){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.79
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 6){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.76
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 7){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.74
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 8){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.71
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 9){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.68
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 10){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.65
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              break;
            case 6.5:        
              if (array.all[i].sets[j].workPerSet[0].reps === 1){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.88
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 2){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.85
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 3){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.82
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 4){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.8
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 5){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.77
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 6){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.75
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 7){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.72
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 8){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.69
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 9){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.67
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              else if (array.all[i].sets[j].workPerSet[0].reps === 10){
                var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.64
                if (oneRM > oneRMMax) {oneRMMax = oneRM}
              }
              break;
          }
          } else {
            if (array.all[i].sets[j].workPerSet[0].reps === 1){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 2){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.96
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 3){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.92
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 4){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.89
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 5){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.86
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 6){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.84
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 7){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.81
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 8){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.79
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 9){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.76
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
            else if (array.all[i].sets[j].workPerSet[0].reps === 10){
              var oneRM = array.all[i].sets[j].workPerSet[0].weight / 0.74
              if (oneRM > oneRMMax) {oneRMMax = oneRM}
            }
          }
        }
        oneRMArray[i] = oneRMMax
      }
      return oneRMArray
    }
  
  export default convertTo1RM;