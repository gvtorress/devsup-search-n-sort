const quick_sort = (arr) => {
  quick_sort_tail_call(arr, 0, arr.length - 1);
  return arr;
}

const quick_sort_tail_call = (arr, left, right) => {
  if (left < right) {
    let pivot = partition(arr, left, right);
    quick_sort_tail_call(arr, left, pivot - 1);
    quick_sort_tail_call(arr, pivot + 1, right);
  }

  return arr;
}

const partition = (arr, left, right) => {
  let pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

const swap = (arr, a, b) => {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
}

const arr = [20,9,86,-2,16,13,34,4];
console.log(quick_sort(arr, 0, 7));
