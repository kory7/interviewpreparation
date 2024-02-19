/**
 * Selection sort: O(n^2)
 * First n is for searching the lower or higher element in array
 * Second n is for doing this for each element of the array.
 *  while it gets lower and lower until the original array size is zero and the new sorted array is size of n.
 */

const dataToSort = [54, 12, 9, 10, 8];

function findLowerIndex(array) {
  let lowerIndex = 0;
  let lowerNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowerNumber) {
      lowerIndex = i;
      lowerNumber = array[i];
    }
  }
  return lowerIndex;
}

function selectionSort(array) {
  let sortedArray = [];
  let lowerIndex = 0;
  const sizeArray = array.length;
  for (let i = 0; i < sizeArray; i++) {
    lowerIndex = findLowerIndex(array);
    sortedArray.push(array[lowerIndex]);
    array.splice(lowerIndex, 1);
  }
  return sortedArray;
}

console.log(selectionSort(dataToSort));
