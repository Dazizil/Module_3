//Nuclear Missile Manager
function launchAll(launchMissile) {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            launchMissile(i);
        }, i * 1000);
    }
}

//A Promise is a Promise
function promiseHelloWorld() {
    let helloWorld = new Promise(resolve => {
        resolve('Hello World!')
    })

    return helloWorld;
}
