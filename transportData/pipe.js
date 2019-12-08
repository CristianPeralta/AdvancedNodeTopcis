const fs = require("fs");

const readStream = fs.createReadStream("./origin.txt");
const writeStream = fs.createWriteStream("./destination.txt");

readStream.pipe(writeStream);

readStream.on("end", () => {
    console.log("Successful process");
})