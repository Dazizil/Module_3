//Split The Bill
function splitTheBill(spendingRecord) {
    //Получаем список участников
    let participants = Object.keys(spendingRecord);

    //Считаем общую сумму расходов
    let totalSpent = participants.reduce((sum, person) =>
        sum + spendingRecord[person], 0);

    //Вычисляем среднюю сумму на человека
    let averagePerPerson = totalSpent / participants.length;

    let paymentSummary = {};
    //Для каждого участника вычисляем разницу между потраченным и средней суммой
    participants.forEach(person => {
        let amountOwedOrDue = spendingRecord[person] - averagePerPerson;
        paymentSummary[person] = Math.round(amountOwedOrDue * 100) / 100;
    });

    return paymentSummary;
}
