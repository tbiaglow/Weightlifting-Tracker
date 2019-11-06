function convertTo1RMBW (array, oneRMArray) {
    var oneRMArrayBW = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].BW) {
            oneRMArrayBW[i] = oneRMArray[i] / array[i].BW
        } else {
            var j = i;
            while (array[j].BW === "" && j >= 0) {
                if (array[j].BW) {
                    oneRMArrayBW[i] = oneRMArray[i] / array[j].BW
                }
                j--;
            }
            
        }
    }
    return oneRMArrayBW;
}
export default convertTo1RMBW;