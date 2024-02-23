const data = [2, 4, 6, 7, 7];

function divideConquer(array) {
  if (array.length == 0) {
    return 0;
  } else {
    return array[0] + divideConquer(array.slice(1));
  }
}

console.log(divideConquer(data));

function countList(array) {
  if (array.length == 0) {
    return 0;
  }
  return 1 + countList(array.slice(1));
}

console.log(countList(data));
