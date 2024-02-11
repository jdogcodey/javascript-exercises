let numberToAdd = 0;

const fibonacci = (input) => {
  if (input < 0) {
    return "OOPS";
  }
  let counter = [0, 1];
  for (let i = 2; i <= input; i++) {
    lastNum = i - 1;
    twoNumAgo = i - 2;
    numberToAdd = counter[lastNum] + counter[twoNumAgo];
    counter.push(numberToAdd);
  }
  return counter[input];
};

// Me working out the formula - x = (array reference[x-1]) + (array reference[x-2])

// Do not edit below this line
module.exports = fibonacci;
