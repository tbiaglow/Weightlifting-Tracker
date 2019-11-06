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
    //Check if there are array1 values outside the bound of array2, if so fill in array2 values until equalized
    while (array1[0].x !== array2[0].x) {
        array2.unshift({
            x: array1[0].x,
        })
    }
    while (array1[array1.length - 1].x !== array2[array2.length - 1].x) {
        array2.push({
            x: array1[array2.length].x
        })
    }
    var dataToGraph = [];
    for (var i = 0; i < array1.length; i++) {
        dataToGraph[i] = {
            x: array1[i].x,
            squat: array1[i].y,
            pauseSquat: array2[i].y
        }
    }
    return dataToGraph;
}
export default arrayEqualize