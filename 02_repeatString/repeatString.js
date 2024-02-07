const repeatString = function(string, num) {
let output = ''
for (let testNum = 1; testNum <= num; testNum++) {
    output += string
}
if (num < 0) {
    output = 'ERROR'
}
return output
};

// Do not edit below this line
module.exports = repeatString;
