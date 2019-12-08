const fs = require("fs");
const { Transform } = require("stream");

const readStream = fs.createReadStream("./origin.txt");
const writeStream = fs.createWriteStream("./destination.txt");

readStream.setEncoding("utf8");

const filter = new Transform({
    writableObjectMode: true,
    transform(data, encoding, cb) {
        this.push(data.toString().toUpperCase());
        cb();
    },
    final(cb) {
        cb();
    }
})

readStream.pipe(filter).pipe(writeStream);