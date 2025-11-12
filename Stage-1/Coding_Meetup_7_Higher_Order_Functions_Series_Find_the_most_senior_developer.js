//Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
function findSenior(listOfDevelopers) {
    let maxAge = 0;

    //Находим максимальный возраст
    listOfDevelopers.forEach((developer) => {
        if (maxAge < developer.age) {
            maxAge = developer.age;
        }
    })

    //Выводим только тех разработчиков, чей возраст совпадает с максимальным
    return listOfDevelopers.filter((developer) => developer.age === maxAge);
}
