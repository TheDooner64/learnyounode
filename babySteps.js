// Access command line arguments with the global "process" object
  // argv is a property which is an array containing the complete command line
  // Slice from the third element to the end of the array, and store the values in a new array called numbers
    // The first element is always "node"
    // The second element is always the path to the program
var numbers = process.argv.slice(2);
var sum = 0;

// Loop over the array of number arguments
for (var i = 0; i < numbers.length; i++) {
  // Convert the number string to an actual number, and add it to the sum
  sum += Number(numbers[i]);
}

console.log(sum);