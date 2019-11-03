firstPoint = {x: 0, y: 300}
  secondPoint = {x: 86400000, y: 350}
  thirdPoint = {x: 86400000 * 4, y: 400}
  fourthPoint = {x: thirdPoint.x + 86400000, y: 420}
  fifthPoint = {x: fourthPoint.x + 86400000 * 2, y: 450}
  data = [firstPoint, secondPoint, thirdPoint, fourthPoint, fifthPoint]
  createNullPoints = data => {
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
  data = createNullPoints(data)
  console.log(data)