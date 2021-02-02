// Create a folder that contains a folder for each letter of the alphabet.

// Import file system
const fs = require("fs");

// Create a general folder to hold data
fs.mkdirSync("Data");

// Iterate over the characters 97 to 122 will give us the letters
for (let i = 97; i < 122; i++) {
  // get each letter and create new folder
  const letter = String.fromCharCode(i);

  fs.mkdirSync(`data/${letter}`);
}
