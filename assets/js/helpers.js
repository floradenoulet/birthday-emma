
function encrypt(str) {
    const arr = new Array(str.length);
    for (const i in str) {
        arr[i] = str.charCodeAt(i);
    }
    return arr;
}