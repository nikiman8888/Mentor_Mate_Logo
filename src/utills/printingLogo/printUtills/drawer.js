
// returning a concatenated string from the loop ,using the params (count,sign)
function drawer(count, sign) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += sign;
    }
    return result;
}
export default drawer;