let a = [1, 2, [3], 4, [5, 6], 7, [8], [9]];

function singlearray() {
  let result = [];

  for (i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      result.push(...a[i]);
    } else {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(singlearray());
