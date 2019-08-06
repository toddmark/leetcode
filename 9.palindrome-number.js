/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  const arr = x.toString().split("");
  let leftRead = x;
  let rightRead = 0;
  for (let i = 0; i < arr.length; i++) {
    rightRead += Number(arr[i]) * Math.pow(10, i);
  }
  return leftRead === rightRead;
};
