//SantaClausable Interface
function isSantaClausable(obj) {
    let hasHoHoHo = (typeof obj.sayHoHoHo === 'function' ||
        typeof obj.say_ho_ho_ho === 'function');

    let hasDistributeGifts = (typeof obj.distributeGifts === 'function' ||
        typeof obj.distribute_gifts === 'function');

    let hasGoDownTheChimney = (typeof obj.goDownTheChimney === 'function' ||
        typeof obj.go_down_the_chimney === 'function');

    return hasHoHoHo && hasDistributeGifts && hasGoDownTheChimney;
}
