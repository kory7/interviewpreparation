/**
 *  Binary search. O(log n)
 *  Each time you dividing by half the array.
 */

const data = [55, 66, 77, 220, 1100, 10000];
const elementToSearch = 66;

function binarySearch(array, element) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.round(right / 2);
  while (left < right && array[middle] != element) {
    if (array[middle] < element) {
      left = middle;
      middle = Math.round(left + right / 2);
    } else {
      right = middle; //3
      middle = Math.round(right / 2);
    }
  }
  console.log(array[middle] + " found in the index " + middle);
  return array[middle];
}

console.log(binarySearch(data, 220));
