function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;  // Target found, return index
    } else if (arr[mid] < target) {
      left = mid + 1;  // Search in the right half
    } else {
      right = mid - 1;  // Search in the left half
    }
  }

  return -1;  // Target not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(arr, target);

console.log(result); // Output: 3 (index of the target in the array)
