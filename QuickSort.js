function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  const pivot = arr[arr.length - 1]; // Choosing the last element as pivot
  const left = [];
  const right = [];

  // Partitioning the array into two halves
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right, then combine them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array));
