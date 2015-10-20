// Require the filesystem module from the core Node library
var fs = require("fs");

// Use a synchronous (aka blocking) filesystem operation to count the number of newline characters in a file
  // This command will return a "buffer" object containing the complete contents of the file
    // Buffer objects are Node's way of efficiently representing arbitrary arrays of data
  // The file path is provided in the first command line argument
var contentString = fs.readFileSync(process.argv[2]).toString();
var contentArray = contentString.split("\n");
var countNewLine = contentArray.length - 1;

console.log(countNewLine);