const sumAll = function(firstVal, secondVal) {
    let rollingSum = 0;
    if (firstVal < 0 || secondVal < 0) return 'ERROR'
    else if (firstVal < secondVal)
        for (i = firstVal; i <= secondVal; i++) {
        rollingSum = rollingSum + i;
        }
    else for (i = secondVal; i <= firstVal; i++) {
        rollingSum = rollingSum + i;
        }
    return rollingSum; 
};

// Do not edit below this line
module.exports = sumAll;
