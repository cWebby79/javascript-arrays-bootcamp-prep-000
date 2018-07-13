var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a,e) {
  newA = a.unshift(e);
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e);
  return a;
}