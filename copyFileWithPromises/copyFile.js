const { promises } = require("fs");

promises.copyFile("./origisn.txt", "./destination.txt")
    .then(() => console.log("Successful process"))
    .catch(error => console.log(error))
    .finally(() => console.log("Finished process"));