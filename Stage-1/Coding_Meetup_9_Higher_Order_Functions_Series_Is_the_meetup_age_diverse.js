function isAgeDiverse(listOfDevelopers) {
    let ageGroups = [
        [13, 19], [20, 29], [30, 39], [40, 49], [50, 59],
        [60, 69], [70, 79], [80, 89], [90, 99], [100, 199]
    ];

    let presentGroups = [];

    ageGroups.forEach((group) => {
        let hasDeveloper = listOfDevelopers.some(developer =>
            developer.age >= group[0] && developer.age <= group[1]
        );

        if (hasDeveloper) {
            presentGroups.push(true);
        } else {
            presentGroups.push(false);
        }
    });

    return presentGroups.every(group => group === true);
}
