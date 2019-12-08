const https = require("https");

const req = https.get("https://en.wikipedia.org/w/api/.php?action=help&format=json", res => {
    res.on("data", (data) => {
        console.log(data.toString());
    });
    res.on("end", () => {
        console.log("End request");
    });
});

req.on("socket", () => {
    console.log("Start connection");
});

req.on("error", (error) => {
    console.log(error);
});