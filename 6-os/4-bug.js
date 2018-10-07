// function convertArrayToObject(arr) {
//   return arr.reduce((curr, acc) => {
//     acc[curr[0]] = curr[1];
//     return acc;
//   }, {});
// }

//acc and curr are swapped.
//curr value is the final returned and acc is the actual
//So, for the total, it key is the first entry of current and the value of total is the second
//and the {} second paramenter is the initialValue
function convertArrayToObject(arr) {
  return arr.reduce((total, curent) => {
    total[curent[0]] = curent[1];
    return total;
  }, {});
}

const obj = convertArrayToObject([
  [1, 'One'],
  [2, 'Two'],
  [3, 'Three'],
  [4, 'Four'],
  [5, 'Five'],
]);

console.log(obj);
/* Should output:

  {
    1: 'One',
    2: 'Two',
    3: 'Three'
    4: 'Four',
    5: 'Five'
  }

*/
// then I have this command
//node --inspect-brk .\4-bug.js
//then i go to chrome://inspect
//i can see the node target, click on inspect
