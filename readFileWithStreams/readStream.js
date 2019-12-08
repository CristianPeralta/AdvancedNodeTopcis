const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", { encoding: "utf8" });

readStream.on("open", () => {
    console.log("Openning file");
}).on("data", () => {
    console.log("Reading file");
}).on("close", () => {
    console.log("Closed File");
}).on("error", () => {
    console.log("Error Reading File");
})