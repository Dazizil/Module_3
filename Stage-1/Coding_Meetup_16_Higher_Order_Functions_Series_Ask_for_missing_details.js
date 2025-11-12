//Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
function askForMissingDetails(listOfDevelopers) {

    listOfDevelopers.forEach((developer) => {
        for (let key in developer) {
            if (developer[key] === null) {
                developer.question = `Hi, could you please provide your ${key}.`
            }
        }
    })

    return listOfDevelopers.filter((developer) => developer.question);
}
