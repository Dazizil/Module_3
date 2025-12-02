//Generating Generators - Generators #3
function* generator(start, end) {
    for (let i = start; i <= end; i++) {
        yield multiplicationTable(i);
    }
}

function* multiplicationTable(number) {
    for (let j = 1; j <= 10; j++) {
        yield `${number} x ${j} = ${number * j}`;
    }
}
