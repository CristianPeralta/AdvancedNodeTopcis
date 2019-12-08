const fs = require("fs");
const eventEmitter = require("events");

class Emisor extends eventEmitter {};

const myEmiter = new Emisor();

const writeStream = fs.createWriteStream("./file.txt");

function writeFile() {
    for (let index = 0; index < 10; index++) {
        writeStream.write(`Line number ${index}\n`);
    }
    writeStream.write(`>>>>>>>>> END <<<<<<<<<<`);
    writeStream.end();
}

function emailNotification() {
    console.log("Preparing email");
    setTimeout(() => {
        myEmiter.emit("sentMail");
    }, 3000);
}

writeStream.on("close", () => {
    emailNotification();
});

myEmiter.on("sentMail", () => {
    readFile();
});

function readFile() {
    fs.readFile("./file.txt", (error, doc) => {
        console.log(doc.toString());
    });
}

writeFile();