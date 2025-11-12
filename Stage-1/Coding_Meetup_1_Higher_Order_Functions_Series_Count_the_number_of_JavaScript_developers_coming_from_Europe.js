//Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(listOfDevelopers) {
    let developersCount = 0;

    listOfDevelopers.forEach((developer) => {
        if (developer.continent === 'Europe' && developer.language === 'JavaScript') {
            developersCount++;
        }
    })

    return developersCount;
}
