const dataToFind = [4, 5, 6, 7, 10];

function dcbinarySearch(data, element) {
  let left = 0;
  let right = data.length;
  let middle = right / 2;

  if (left < right && array[middle] != element) {
    if (array[middle] < element) {
      left = middle;
      middle = Math.round(left + right / 2);
    } else {
      right = middle;
      middle = Math.round(right / 2);
    }
  }
}
