let a = [1, 2, 4,3,5,7,8,6,9];

function SecondLargestNumber() {
    let largest = -Infinity;  // -Infinity is smallest possible number
    let secondLargest = -Infinity;

    for (let i = 0; i < a.length; i++) {  // Fixed: a.length instead of a
        if (a[i] > largest) {
            secondLargest = largest;  // Update second largest first
            largest = a[i];           // Then update largest
        // } else if (a[i] > secondLargest && a[i] < largest) {
        //     secondLargest = a[i];
        }
    }

    return secondLargest;  // Return the value
}

console.log(SecondLargestNumber()); // Output: 8

// 1 > largest // largest=-Infinity is true
// then largest =1

// 2 > largest // largest is 1 trure
// then largest = 2

// 3 > 2 // largest is 2
// then largest = 3
// .
// .
// 9 > 8 // largest is 8
// then largest is 9

