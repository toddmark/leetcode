/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let tempArr = [];
  tempArr = Math.abs(x).toString().split("");
  const reverseArr = tempArr.reverse();
  if (parseInt(reverseArr.join("")) > Math.pow(2, 31)) {
    return 0;
  }
  if (x > 0) {
    return parseInt(tempArr.join(""));
  }
  return  parseInt("-" + tempArr.join(""));
};
