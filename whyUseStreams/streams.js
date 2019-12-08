const fs = require("fs");

console.time("Response Time using readFileSync");

for (let index = 0; index < 5; index++) {
    fs.readFileSync("file.txt", "utf8");
}

console.timeEnd("Response Time using readFileSync");

console.time("Response Time using createWriteStream");

for (let index = 0; index < 5; index++) {
    fs.createWriteStream("file.txt", { encoding: "utf8" });
}

console.timeEnd("Response Time using createWriteStream");