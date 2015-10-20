// Require the filesystem module from the core Node library
var fs = require("fs");

// Store the file path in a variable
  // The file path is provided in the first command line argument
var fileName = process.argv[2];

// Use an asynchronous (aka non-blocking) filesystem operation to count the number of newline characters in a file
function countNewLines(callback) {
  fs.readFile(fileName, function(err, data) {
    // Check if the callback function provides an error
    if (!err) {
      // Count the number of newline chatacters in the specified file
      var contentArray = data.toString().split("\n");
      var countNewLine = contentArray.length - 1;
      // Invoke the callback function when complete
      callback(countNewLine);
    } else {
      // If an error is received, print the error message to the console
      console.log(err.message);
    }
  });
}

// Function to print the answer to the console
function printAnswer(answer) {
  console.log(answer);
}

// Call the readFile function and pass the callback function as an argument
countNewLines(printAnswer);