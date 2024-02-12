const findTheOldest = function (namesArray) {
  for (i = 0; i < namesArray.length; i++)
    if (!("yearOfDeath" in namesArray[i])) {
      namesArray[i].yearOfDeath = new Date().getFullYear();
    }
  const ordered = namesArray.sort(function (a, b) {
    // prettier-ignore
    if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
      return -1;
    } else {
      return 1;
    }
  });
  return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
