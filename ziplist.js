const abc = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}
console.log(zipList(abc, numbers));
// eslint-disable-next-line no-unused-vars
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(abc, numbers));
