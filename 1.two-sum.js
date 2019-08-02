/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.length > 0) {
      break;
    }
    const firstIndex = i;
    for ( let j = i + 1; j < nums.length; j++) {
      if (nums[firstIndex] + nums[j] === target) {
        map.push(firstIndex, j);
        break;
      }
    }
  }
  return map;
};
