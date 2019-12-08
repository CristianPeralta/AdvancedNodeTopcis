function firstAsyncFunction () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    });
}

function secondAsyncFunction () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000);
    });
}

firstAsyncFunction().then(() => {
    console.log("successful firstAsyncFunction");
    return secondAsyncFunction();
}).then(() => {
    console.log("successful secondAsyncFunction");
}).catch(error => console.log(error));