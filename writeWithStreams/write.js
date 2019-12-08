const fs = require("fs");
let someString = "LoremIpsumissimplydummytextoftheprinting";

const writeStream = fs.createWriteStream("./file.txt");

for (let index = 0; index < 15; index++) {
    someString += someString;
    writeStream.write(someString, () => {
        console.log("Writing...");
    });
}

fs.writeFile("./file.txt", someString, () => {
    console.log("Write directly");
});



