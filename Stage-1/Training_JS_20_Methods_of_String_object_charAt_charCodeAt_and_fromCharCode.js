//Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
function topSecret(encryptedText) {
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        let originalCharCode = encryptedText.charCodeAt(i);
        let decryptedCharCode = originalCharCode;

        //Сначала делаем сдвиг для букв A-Z
        if (originalCharCode >= 65 && originalCharCode <= 90) {
            decryptedCharCode = originalCharCode - 3;

            //Если вышли за начало алфавита, переходим к концу
            if (decryptedCharCode < 65) {
                decryptedCharCode += 26;
            }  // циклический сдвиг для букв a-z
        } else if (originalCharCode >= 97 && originalCharCode <= 122) {
            decryptedCharCode = originalCharCode - 3;

            //Если вышли за начало алфавита, переходим к концу
            if (decryptedCharCode < 97) {
                decryptedCharCode += 26;
            }
        }

        // Для остальных символов оставляем как есть
        decryptedText += String.fromCharCode(decryptedCharCode);
    }

    return decryptedText;
}
