/**
 * @param {int32} n
 * @return {int32}
 *
 * Generate ALL possible subsets of a given set. The set is given in the form of a string s containing
 * distinct lowercase characters 'a' - 'z'.
 *
 */

let result = [];

function generate_all_subsets(s) {
  helper("", s);
  return result;
}

let helper = (slate, arr) => {
  // basecase
  if (arr.length === 0) {
    result.push(slate);
    return;
  }

  // recursive case
  // exclusion
  helper(slate, arr.substring(1));

  // inclusion
  helper(slate + arr.charAt(0), arr.substring(1));
};

console.log(generate_all_subsets("xy"));
