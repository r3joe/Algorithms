/**
 * @param {list_int32} arr
 * @return {list_list_int32}
 * 
 * Given an array of unique numbers, return in any order all its permutations.
 * 
 */

let result = [];

function get_permutations(nums) {
    helper(nums, 0, []);
    return result;
}

let helper = (arr, i) => {
  // base case
  if (i === arr.length) {
    result.push([...arr]);
  }
  else {
    for(let j = i; j < arr.length; j++) {
      swap(arr, i, j);
      helper(arr, i + 1);
      swap(arr, j, i);
    }
  }
};

const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
};

console.log(
  get_permutations([1,2,3])
);