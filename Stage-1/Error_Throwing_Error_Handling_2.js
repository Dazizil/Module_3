//Error Throwing - Error Handling #2
function validateMessage(inputMessage) {
    if (inputMessage === null) {
        throw new ReferenceError('Message is null!');
    }

    if (typeof inputMessage !== 'string') {
        throw new TypeError(`Message should be of type string but was of type ${typeof inputMessage}!`);
    }

    if (inputMessage.length === 0 || inputMessage.length > 255) {
        throw new RangeError(`Message contains ${inputMessage.length} characters!`);
    }

    //Проверка на HTML теги
    // /<[^>]*>/ = найти открывающую скобку <, потом любые символы кроме >, потом закрывающую скобку >
    let htmlTagRegex = /<[^>]*>/;
    if (htmlTagRegex.test(inputMessage)) {
        return false;
    }

    return true;
}
