const merge_sort = (arr) => {
  merge_sort_tail_call(arr, 0, arr.length - 1)
  return arr;
}

const merge_sort_tail_call = (arr, left, right) => {
  if (left < right) {
    let middle = Math.floor((left + right) / 2);
    merge_sort_tail_call(arr, left, middle);
    merge_sort_tail_call(arr, middle + 1, right);
    merge(arr, left, middle, right);
  };

  return arr;
}

const merge = (arr, left, middle, right) => {
  const result = [];
  let length = right - left + 1;
  let i = left;
  let j = middle + 1;
  let k = 0;

  while (i <= middle && j <= right) {
    if (arr[i] < arr[j]) {
      result[k++] = arr[i++];
    } else {
      result[k++] = arr[j++];
    }
  }

  while (i <= middle) {
    result[k++] = arr[i++];
  }

  while (j <= right) {
    result[k++] = arr[j++];
  }

  for (let i = 0; i < length; i++) {
    arr[left + i] = result[i];
  }
}

const arr = [20,9,86,-2,16,13,34,4];
console.log(merge_sort(arr));
