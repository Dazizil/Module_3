//Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
function findAdmin(listOfDevelopers, developerLanguage) {
    const githubAdmins = [];

    listOfDevelopers.forEach((developer) => {
        if (developer.language === developerLanguage && developer.githubAdmin === 'yes') {
            githubAdmins.push(developer);
        }
    });

    return githubAdmins;
}

