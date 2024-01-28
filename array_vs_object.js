/**
 * Good things about arrays:
 *  1. Getting information (if we know the index)
 *  2. Pushing data.
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
  input.includes(searchKey);
};

console.log(includesInArray(16));
