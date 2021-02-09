// Marks 20%

// The ./books directory contains a random amount of directories and files.
// write a function to count the number of directories and files and 
// returns a promise that resolves to an object with keys `files` for number of files and `directories` for number of directories.

// documentation for fs https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

function count() {
  // your code here
  
}

const fs = require("fs");
const path = require("path");

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};



console.log(getAllFiles("./books"));
module.exports = count;
