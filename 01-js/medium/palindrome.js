/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {function isPalindrome(str) {
  // Convert the string to lowercase to make it case-insensitive
  const lowercaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters using a regular expression
  const alphanumericStr = lowercaseStr.replace(/[^a-z0-9]/g, '');

  // Reverse the alphanumeric string
  const reversedStr = alphanumericStr.split('').reverse().join('');

  // Check if the original and reversed strings are equal
  return alphanumericStr === reversedStr;
}

  return true;
}

module.exports = isPalindrome;
