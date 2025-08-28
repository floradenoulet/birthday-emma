
function encrypt(str) {
    const arr = new Array(str.length);
    for (const i in str) {
        const ascii = str.charCodeAt(i);
        arr[i] = ascii;
    }
    return arr;
}