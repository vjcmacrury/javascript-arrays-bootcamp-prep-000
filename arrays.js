var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, element) {
  var array1 = ["foo", 1]
  element = ["Gabriel",...array1]
  return((element[0], array1))
}

var array2 = [1]
function destructivelyAddElementToBeginningOfArray(array2, element) {
  array2.unshift('foo');
  return(array2)
}

var array3 = [1]
function addElementToEndOfArray(array3, element) {
  element = [...array3, "foo"]
  return(element)
}

var array4 = [1]
function destructivelyAddElementToEndOfArray(array4, element) {
  array4.push('foo');
  return(array4)
}

var array5 = [1, 2, 3]
function accessElementInArray(array5, index) {
  return(array5[2])
}

var array6 = [4, 5, 6]
function destructivelyRemoveElementFromBeginningOfArray(array6) {
  array6.shift()
  return(array6)
}

var array7 = [7, 8, 9]
function removeElementFromBeginningOfArray(array8) {
  array8 = array7.slice(1)
  return(array8)
}

