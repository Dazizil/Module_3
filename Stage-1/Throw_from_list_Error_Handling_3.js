//Throw from list - Error Handling #3
function validate(username, password) {
    //Тримим пробелы для валидации и для сообщений об ошибках
    let trimmedUsername = username.trim();
    let trimmedPassword = password.trim();

    //Валидация username
    //Проверка длины username
    if (trimmedUsername.length > 12) {
        throw ERRORS.usernameTooLong(trimmedUsername);
    }

    //Проверка минимальной длины username
    if (trimmedUsername.length < 1) {
        throw ERRORS.usernameTooShort(trimmedUsername);
    }

    //Проверка запрещенных символов в username
    let usernameInvalidChars = /[(){}[\]|;:'"\/?.,<>~\-=+*&^%$@!]/;
    if (usernameInvalidChars.test(trimmedUsername)) {
        throw ERRORS.usernameInvalidCharacters(trimmedUsername);
    }

    //Валидация пароля
    //Проверка длины пароля
    if (trimmedPassword.length > 24) {
        throw ERRORS.passwordTooLong(trimmedPassword);
    }

    //Проверка минимальной длины пароля
    if (trimmedPassword.length < 8) {
        throw ERRORS.passwordTooShort(trimmedPassword);
    }

    //Проверка запрещенных символов в пароле
    const passwordAllowedChars = /^[a-zA-Z0-9;:?.,<>~*^%$@!_ ]+$/;
    if (!passwordAllowedChars.test(trimmedPassword)) {
        throw ERRORS.passwordInvalidCharacters(trimmedPassword);
    }

    //Проверка заглавной буквы в пароле
    if (!/[A-Z]/.test(trimmedPassword)) {
        throw ERRORS.passwordNoCapital(trimmedPassword);
    }

    //Проверка цифры в пароле
    if (!/\d/.test(trimmedPassword)) {
        throw ERRORS.passwordNoNumber(trimmedPassword);
    }

    //Проверка что пароль не содержит username
    if (trimmedPassword.includes(trimmedUsername)) {
        throw ERRORS.passwordContainsUsername(trimmedPassword);
    }

    return true;
}
