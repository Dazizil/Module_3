//Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
function countLanguages(listOfDevelopers) {
    let languageCount = {};

    listOfDevelopers.forEach(developer => {
        let language = developer.language;
        if (languageCount[language]) {
            languageCount[language]++;
        } else {
            languageCount[language] = 1;
        }
    });

    return languageCount;
}
