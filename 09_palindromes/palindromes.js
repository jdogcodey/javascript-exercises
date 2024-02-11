const palindromes = function (input) {
  let regularOrder = input
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
  let reverseOrder = regularOrder.slice().reverse();
  let result = true;
  for (let i = 0; i < regularOrder.length; i++) {
    if (regularOrder[i] !== reverseOrder[i]) {
      result = false;
      break;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = palindromes;
