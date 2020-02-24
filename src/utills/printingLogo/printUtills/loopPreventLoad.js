import drawer from './drawer';
let result = [];
let result2 = [];
const line = '-';
const star = '*';
// this function prevent a bit the loading proccess if the input number is too big
function loopPreventLoadUpperPart(number, row, count) {
    let arrayContainer = [];
    for (let loopRow = row; loopRow < count; loopRow++) {
        arrayContainer =
            drawer(+number - loopRow, line) +
            drawer(+number + loopRow * 2, star) +
            drawer(+number - loopRow * 2, line) +
            drawer(+number + loopRow * 2, star) +
            drawer(+number - loopRow, line);
        result.push(arrayContainer);
    }
    let copyResult = result;
    result = [];
    return copyResult; // send copy and clear result for future inputs
}

function loopPreventLoadLowerPart(number, row, count) {
    let arrayContainer = [];
    for (let loopRow = row; loopRow < count; loopRow++) {
        arrayContainer =
            drawer((+number - 1) / 2 - loopRow, line) +
            drawer(+number, star) +
            drawer(loopRow * 2 + 1, line) +
            drawer(((+number * 2) - 1) - loopRow * 2, star) +
            drawer(loopRow * 2 + 1, line) +
            drawer(+number, star) +
            drawer((+number - 1) / 2 - (loopRow), line);
        result2.push(arrayContainer);
        debugger;
    }
    let copyResult2 = result2;
    result2 = [];
    return copyResult2; // send copy and clear result for future inputs
}

export  { loopPreventLoadUpperPart,loopPreventLoadLowerPart };