
import { correctPwdEncrypted } from "./script.js";


function encrypt(str) {
    const arr = new Array(str.length);
    for (const i in str) {
        arr[i] = str.charCodeAt(i);
    }
    return arr;
}

function pwdIsCorrect(guessedPwdEncrypted) {
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

export { encrypt, pwdIsCorrect };