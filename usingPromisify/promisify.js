const fs = require("fs");
const { promisify } = require("util");

/* fs.writeFile("./file.txt", "hello guys!!", () => {
    console.log("Successful process");
}); //This method work with callback */

const writePromise = promisify(fs.writeFile); // Transform fs.writeFile to promise format

writePromise("./file.txt", "hello guys!!!!!")
    .then(() => console.log("Successful process"))
    .catch(error => console.log(error))
    .finally(() => console.log("Finished process"));
