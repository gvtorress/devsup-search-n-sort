const bubble_sort = (arr) => {
  let n = arr.length - 1;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
};

const swap = (arr, a, b) => {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
}

const arr = [20,9,86,-2,16];
console.log(bubble_sort(arr));
