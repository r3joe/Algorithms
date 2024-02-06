
/**
 * @param {int32} n
 * @return {list_str}
 *
 *  Generate Binary Strings Of Length N
 * 
 */
function get_binary_strings(n) {
  let res = [];

  helper(n, "", res);
  return res;
}

let helper = (n, slate, res) => {
  if (n === 0) {
    res.push(slate);
  }
  else {
      helper(n-1, slate+"0", res);
      helper(n-1, slate+"1", res);
  }
};

console.log(get_binary_strings(3));