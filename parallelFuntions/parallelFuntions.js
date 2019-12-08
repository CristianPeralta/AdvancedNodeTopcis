function firstAsyncFunction () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello")
        }, 2000);
    });
}

function secondAsyncFunction () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("guys")
        }, 5000);
    });
}

function thirdAsyncFunction () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("!!!")
        }, 1000);
    });
}
console.time("starting");
Promise.all([
    firstAsyncFunction(),
    secondAsyncFunction(),
    thirdAsyncFunction(),
]).then((values) => {
    console.timeEnd("starting");
    console.log(values);
}).catch(error => console.log(error));