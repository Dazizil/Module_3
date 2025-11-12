//Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(listOfDevelopers) {
    let languageMatches = [];

    let firstDeveloperLanguage = listOfDevelopers[0].language;
    listOfDevelopers.forEach((developer) => {
        if (developer.language === firstDeveloperLanguage) {
            languageMatches.push(true);
        } else {
            languageMatches.push(false);
        }
    })

    return languageMatches.every(match => match === true)
}
