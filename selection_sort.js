const number = [2, 32, 12, 34, 43, -5, 98, 52, 31];

// const sorted = number.sort((a, b) => a - b);
// console.log(sort);

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
const sorted = selectionSort(number);
console.log(sorted);
