"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#map
  // => locks the value inside to the outside too
  map: (array, callback) => {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(callback(array[i]));
    }
    return newArray;
  }
}
// Define a method that multiplies the input by 10
function multiplyBy10(value) {
  return 10 * value;
}
const value = _.map([1, 2, 3], multiplyBy10);
// value => [10, 20, 30]
console.log(value);