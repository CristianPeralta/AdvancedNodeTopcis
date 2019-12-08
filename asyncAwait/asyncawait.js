function genRandomNumber () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100))
        }, 5000);
    });
}

async function getResult () {
    const randomNumber = await genRandomNumber();
    console.log(`result: ${randomNumber}`);
}

getResult();