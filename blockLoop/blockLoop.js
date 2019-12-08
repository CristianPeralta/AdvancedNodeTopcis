const fs = require("fs");
const http = require("http");

const readFile = () => {
    // fs.readFileSync("./file.txt", "utf8"); // too slow
    fs.createReadStream("./file.txt", { encoding: "utf8" });
}
http.createServer(function(req, res) {
    for (let index = 0; index < 1000; index++) {
        readFile()
    }
    res.write("Hello guys!!");
    res.end();
}).listen(8080);