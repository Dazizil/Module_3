//Training JS #11: loop statement --break,continue
function grabDoll(dollsArray) {
    let bagWithDolls = [];
    for (let i = 0; i < dollsArray.length; i++) {
        if (bagWithDolls.length === 3) {
            break;
        }

        if (dollsArray[i] === 'Hello Kitty' || dollsArray[i] === 'Barbie doll') {
            bagWithDolls.push(dollsArray[i]);
        } else {
            continue;
        }
    }

    return bagWithDolls;
}
