var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a,e) {
  var newArray = a;
  ["e", ...newArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e);
  return a;
}