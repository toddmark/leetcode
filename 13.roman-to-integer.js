/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const SymbolRoman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  var arrRoman = s.split("");
  var handleRoman = function (romanIndex, sum) {
    const singleRoman = SymbolRoman[arrRoman[romanIndex]];
    // console.log(singleRoman, SymbolRoman[arrRoman[romanIndex + 1]]);
    if (typeof SymbolRoman[arrRoman[romanIndex + 1]] === 'number') {
      console.log(SymbolRoman[arrRoman[romanIndex + 1]]);
      if (singleRoman >= SymbolRoman[arrRoman[romanIndex + 1]]) {
        return handleRoman(romanIndex + 1, singleRoman + sum);
      } else {
        console.log(singleRoman , SymbolRoman[arrRoman[romanIndex + 1]], sum)
        return handleRoman(romanIndex + 2, SymbolRoman[arrRoman[romanIndex + 1]] - singleRoman + sum);
      }
    } else {
      return singleRoman ? sum + singleRoman : sum;
    }
  }
  return handleRoman(0, 0);
};

// symbols = {
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
// };

// var romanToInt = function(s) {
//     value = 0;
//     for(let i = 0; i < s.length; i+=1){
//         symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
//     }
//     return value
// };
