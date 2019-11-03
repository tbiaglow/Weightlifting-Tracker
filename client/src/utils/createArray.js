function createArray (array, oneRMArray) {


    // Function to create array of objects containing the date and lift weight on that date
  function formArray (array, oneRMArray) {
    var data = []
    for (var i = 0; i < array.all.length; i++) {
      var d;
      var monthString = array.all[i].month.toString();
      var dayString = array.all[i].day.toString();
      var yearString = array.all[i].year.toString();
      var d = new Date(monthString + "-" + dayString + "-" + yearString);
      var dParsed = Date.parse(d);

      data[i] = {
          x: dParsed,
          y: oneRMArray[i]
      } 
    }
    return data
  }

  // Get rid of all values that are not greater than all previous values to eliminate graphical noise
  function trimArray (array) {
    var arrayMax = array[0].y;
    for (var i = 0; i < array.length; i++) {
      if(array[i - 1]) {
        if (array[i].y < arrayMax) {
          array.splice(i, 1);
          i--;
        } else if (array[i].y >= arrayMax) {
          arrayMax = array[i].y
        }
      }
    }
    return array
  }

  //Function to differentiate the data to get user's RATE of progress
  function differentiate (data) {
    for (var i = 1; i < data.length - 1; i++) {
      data[i].yDeriv = ((data[i + 1].y - data[i - 1].y) / (data[i + 1].x - data[i - 1].x)) * 86400000 //multiply by number of milliseconds per day to get daily rate of change
    }
    data[data.length - 1].yDeriv = ((data[data.length - 1].y - data[data.length - 2].y) / (data[data.length - 1].x - data[data.length - 2].x)) * 86400000
    return data
  }

  //Forced all data points to be evenly spaced wrt the x (time) axis by creating points with just x values at evenly spaced intervals
  function createNullPoints (data) {
    var i = 0;
    while (i < data.length - 1) {
      //86400000 is the number of milliseconds in a day
      if (data[i + 1].x - data[i].x > 86400000) {
        var numNullPoints = (data[i + 1].x - data[i].x) / 86400000;
        var firstPart = data.splice(0, i + 1);
        var j = 1;
        while (j < numNullPoints) {
            var xVal = firstPart[i].x;
          var newPoint = {x: xVal + 86400000 * j};
            firstPart.push(newPoint);
          j += 1;
        }
        for (var k = 0; k < data.length; k++) {
            firstPart.push(data[k]);
        }
        data = firstPart;
      }
      i += 1;
    }
  return data;
  }

  //Format x (date) values so they look nice when charted
  function fixDateValues (data) {
    for (var i = 0; i < data.length; i++) {
      var d = new Date(data[i].x);
      var dYear = d.getFullYear().toString();
      var dMonth = (d.getMonth() + 1).toString();
      var dDay = d.getDate().toString();
      data[i].x = dDay + "/" + dMonth + "/" + dYear;
      console.log(data[i]);
    }
    return data
  }
  var data = formArray(array, oneRMArray);
  data = trimArray(data)
  data = differentiate(data)
  data = createNullPoints(data)
  data = fixDateValues(data)
    return data
}

export default createArray;