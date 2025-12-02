function promiseHelloWorld() {
    let helloWorld = new Promise(resolve => {
        resolve('Hello World!')
    })

    return helloWorld;
}
