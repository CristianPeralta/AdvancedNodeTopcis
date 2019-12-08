const fs = require("fs");
const { Duplex } = require("stream");

const readStream = fs.createReadStream("./origin.txt");
const writeStream = fs.createWriteStream("./destination.txt");

const report = new Duplex({
    write(data, encode, callback) {
        console.log(data.toString());
        this.push(data.toString())
        console.log(encode);
        callback();
    },
    read(size) {
        console.log(size);
    }
});

readStream.pipe(report).pipe(writeStream);