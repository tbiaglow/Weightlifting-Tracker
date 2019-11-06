function arrayEqualize (array1, array2) {
    //Check if there are array2 values outside the bound of array1, eliminate them
    for (var i = 0; i < array2.length; i++) {
        var contained = false;
        for (var j = 0; j < array1.length; j++) {
            if (array2[i].x === array1[j].x) {
                contained = true;
            }
        }
        if (contained === false) {
            array2.splice(i, 1);
        }
    }
    console.log(array2);
    //Check if there are array1 values outside the bound of array2, if so fill in array2 values until equalized
    var i = 0;
    while (array1[i].x !== array2[i].x) {
        array2.splice(i, 0, {
            x: array1[i].x,
        })
        i++;
    }
    console.log(array2)
    while (array1[array1.length - 1].x !== array2[array2.length - 1].x) {
        array2.push({
            x: array1[array2.length].x
        })
    }
    console.log(array2)
    console.log(array2.length)
    console.log(array1.length)
    var dataToGraph = [];
    for (var i = 0; i < array1.length; i++) {
        dataToGraph[i] = {
            x: array1[i].x,
            y1: array1[i].y,
            y2: array2[i].y
        }
    }
    console.log(dataToGraph)
    return dataToGraph;
}
export default arrayEqualize