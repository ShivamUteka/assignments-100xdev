/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  function countVowels(str) {
    // Convert the string to lowercase to consider both uppercase and lowercase vowels
    const lowercaseStr = str.toLowerCase();

    // Count the number of vowels using a regular expression
    const vowelCount = (lowercaseStr.match(/[aeiou]/g) || []).length;

    return vowelCount;
}
}

module.exports = countVowels;