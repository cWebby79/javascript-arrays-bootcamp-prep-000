var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a,e) {
  ["e", ...[a]];
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e);
  return a;
}