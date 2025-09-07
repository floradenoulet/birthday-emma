
function encrypt(str) {
    const arr = new Array(str.length);
    for (const i in str) {
        arr[i] = str.charCodeAt(i);
    }
    return arr;
}

function pwdIsCorrect(guessedPwdEncrypted, correctPwdEncrypted) {
    if (guessedPwdEncrypted.length !== correctPwdEncrypted.length) {
        return false;
    }
    for (const i in guessedPwdEncrypted) {
        if (guessedPwdEncrypted[i] !== correctPwdEncrypted[i]) {
            return false;
        }
    }
    return true;
}

function getMessage(messages, index) {
    if (index < messages.length) {
        return messages[index];
    } else {
        return messages[messages.length - 1];
    }
}


export { pwdIsCorrect, encrypt, getMessage };