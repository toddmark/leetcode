/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
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
/**
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    let result = 0

    for (let i = 2; i <= 15; i++) {
        if (x < Math.pow(10, i)) {
            const length = i
            const isLengthOdd = length % 2 !== 0
            const maxIndex = length - 1
            const halfIndex = Math.floor(length / 2)
            let calcX = x

            for (let j = maxIndex; j >= halfIndex; j--) {
                const edge = Math.pow(10, j)
                if (calcX < edge) continue  // e.g. 101, '0' no need calculate

                const currentNum = parseInt(calcX / edge)

                if (j === halfIndex && isLengthOdd) {
                   result += currentNum * edge
                } else {
                   result += currentNum * edge + currentNum * Math.pow(10, length - 1 - j)
                }

                calcX = calcX - currentNum * edge
            }

            break
        }
    }

    return result === x
};
 */
