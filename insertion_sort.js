const insertion_sort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let x = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[x] < arr[j]) {
        swap(arr, x, j)
        x--;
      } else {
        break;
      }
    }
  }

  return arr;
}

const swap = (arr, a, b) => {
  const aux = arr[a];
  arr[a] = arr[b];
  arr[b] = aux;
}

const arr = [20,9,86,-2,16,13,34,4];
console.log(insertion_sort(arr));

const insertion_sort_devsup = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const aux = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > aux) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = aux;
  }
  return arr
}

const arr2 = [20,9,86,-2,16,13,34,4];
console.log(insertion_sort_devsup(arr2));