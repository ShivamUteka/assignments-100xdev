/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length === 0) {
        // If the array is empty, return null or handle the case as needed
        return null;
    }

    // Assume the first element is the largest
    let largestElement = numbers[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {
        // If the current element is greater than the assumed largest element, update it
        if (numbers[i] > largestElement) {
            largestElement = numbers[i];
        }
    

    return largestElement;
}

    
}

module.exports = findLargestElement;