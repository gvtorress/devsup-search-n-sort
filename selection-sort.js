const selection_sort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (i !== minIdx) swap(arr, i, minIdx);
  }
  return arr;
}

const swap = (arr, a, b) => {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
}

const arr = [20,9,86,-2,16,13,34,4];
console.log(selection_sort(arr));
