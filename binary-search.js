const binary_search = (nums, key) => {
  let low = 0;
  let high = nums.length - 1;
  let middle;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    if (key < nums[middle]) {
      high = middle - 1;
    } else if (key > nums[middle]) {
      low = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(binary_search([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 34)); // 9
console.log(binary_search([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 38)); // 10
console.log(binary_search([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 1)); // -1

const recursive_binary_search = (nums, key, low, high) => {
  if (low > high) {
    return -1;
  }
  
  const middle = Math.floor((high + low) / 2);

  if (key === nums[middle]) {
    return middle;
  } else if (key < nums[middle]) {
    return recursive_binary_search(nums, key, low, middle - 1);
  } else {
    return recursive_binary_search(nums, key, middle + 1, high);
  }
}

console.log(recursive_binary_search([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 34, 0, 10)); // 9
console.log(recursive_binary_search([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 38, 0, 10)); // 10
console.log(recursive_binary_search([-5, 0, 2, 8, 13, 16, 19, 23, 29, 34, 38], 1, 0, 10)); // -1
