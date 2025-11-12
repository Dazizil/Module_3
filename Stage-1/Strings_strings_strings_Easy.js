//Strings, strings, strings (Easy)
Number.prototype.toString = function () {
    return String(this.valueOf())
}

Boolean.prototype.toString = function () {
    return this.valueOf() === true ? 'true' : 'false';
}

Array.prototype.toString = function () {
    const stringifiedElements = this.map(element => {
        return String(element);
    });

    return `[${stringifiedElements.join(',')}]`;
};

