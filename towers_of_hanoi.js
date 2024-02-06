
/**
 * @param {int32} n
 * @return {list_list_int32}
 * 
 * TC = O(2^n)
 */
function tower_of_hanoi(n) {
    let res = []

    number_of_moves(n, 1, 2, 3, res);
    return res;
}

let number_of_moves = (n, source, aux, dest, res) => {
  // base case
  if (n === 1) {
    res.push([source, dest])
    return;
  }

  number_of_moves(n-1, source, dest, aux, res);
  res.push([source, dest]);
  number_of_moves(n-1, aux, source, dest, res);

  return res;
};

let discs = tower_of_hanoi(4);
console.log(discs);
