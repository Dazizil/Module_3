//Training JS #27: methods of arrayObject---filter()
function countGrade(scores) {
    let scoreCount = {
        S: 0,
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        X: 0
    }

    scores.filter((x) => {
        if (x === 100) {
            return scoreCount['S']++;
        }

        if (x < 100 && x >= 90) {
            return scoreCount['A']++;
        }

        if (x < 90 && x >= 80) {
            return scoreCount['B']++;
        }

        if (x < 80 && x >= 60) {
            return scoreCount['C']++;
        }

        if (x < 60 && x >= 0) {
            return scoreCount['D']++;
        }

        if (x === -1) {
            return scoreCount['X']++;
        }
    })

    return scoreCount;
}
