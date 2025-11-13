//Cylon Evolution
function Cylon(model) {
    this.model = model;
}

Cylon.prototype.attack = function () {
    return "Destroy all humans!";
}

function HumanSkin(model) {
    Cylon.call(this, model);
}

//Создается объект который наследует от Cylon и этот объект становится прототипом для всех будущих экземпляров HumanSkin
HumanSkin.prototype = Object.create(Cylon.prototype);

HumanSkin.prototype.infiltrate = function () {
    return "Infiltrate the colonies";
};
