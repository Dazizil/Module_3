//Training JS #36: methods of Math---kata author's lover:random()
function rndCode() {
    const CHAR_RANGE1 = 'ABCDEFGHIJKLM';
    const CHAR_RANGE2 = '~!@#$%^&*';
    let password = [];
    for (let i = 0; i < 2; i++) {
        password.push(CHAR_RANGE1[Math.floor(CHAR_RANGE1.length * Math.random())]);
    }

    for (let i = 0; i < 4; i++) {
        password.push(Math.floor(Math.random() * 10));
    }

    for (let i = 0; i < 2; i++) {
        password.push(CHAR_RANGE2[Math.floor(CHAR_RANGE2.length * Math.random())]);
    }

    return password.join('');
}
