/**
 * Good things about arrays:
 *  1. Pop data.
 *  2. Pushing data.
 *
 * Bad things about arrays:
 *  1. Searching data it takes long time since we need to check every single in order.
 *
 * Good things about Objects:
 *  1. Searching information (Only need to know the key)
 *
 *
 *
 * How to know if a certain number is in the DS(array vs object)?
 */

const input = [3, 2, 16, 4];
const includesInArray = (searchKey) => {
  return input.includes(searchKey);
};
// Searching is O(n) since the include function need to go and check every single element in the array
console.log(includesInArray(16));

const objectInput = { 3: true, 2: true, 16: true, 4: true };
const incluesInObject = (num) => (objectInput[num] ? true : false);

console.log(incluesInObject(7));
//Searching for object is O(1) since only need call it his key.
