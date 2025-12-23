let a = [2, 4, 6];
let b = [3, 5, 7];
let count = 7;

function findcount() {
  let result = [];

  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i] + b[j] === count) {
        result.push([a[i], b[j]]);
      }
    }
  }
  return result;
}

console.log(findcount());
