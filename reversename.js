// let a = "rohit";
let a = [1, 2, 3, 4, 5, 6];

function reversename() {
  let result = "";

  for (i = a.length - 1; i >= 0; i--) {
    result = result + a[i];
  }
  return result;
}
console.log(reversename());
