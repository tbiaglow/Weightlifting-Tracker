// Function to convert weight at a given # of reps and RPE to a 1RM, RPE 10 estimate
function convertTo1RM (array)  {
    var oneRMArray = [];
    for (var i = 0; i < array.all.length; i ++) {
      if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].RPE) {
      switch (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].RPE) {
        case 10:
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.96
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.92
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
          }
          break;
        case 9.5: 
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.98
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.94
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.91
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.88
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.85
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.82
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.8
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.77
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.75
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.72
          }
          break;
        case 9:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.96
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.92
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.71
          }
          break;
        case 8.5:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.94
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.91
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.88
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.85
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.82
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.8
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.77
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.75
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.72
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.69
          }
          break;
        case 8:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.92
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.71
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.68
          }
          break;
        case 7.5:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.91
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.88
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.85
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.82
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.8
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.77
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.75
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.72
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.69
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.67
          }
          break;
        case 7:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.71
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.68
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.65
          }
          break;
        case 6.5:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.88
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.85
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.82
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.8
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.77
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.75
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.72
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.69
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.67
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.64
          }
          break;
      }
      } else {
        if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.96
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.92
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
        }
      }
    }
    return oneRMArray
  }

export default convertTo1RM;