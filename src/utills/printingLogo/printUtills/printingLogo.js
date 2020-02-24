import loopPreventLoad from './loopPreventLoad';
import drawer from './drawer';

let logoPart1 = [];
let logoPart2 = [];
const star = '*';
const line = '-'

// printing the upper part of logo
function printingLogoUpPart(number) {
    const halfRowsLogo = (+number + 1) / 2;

    for (let row = 0; row < halfRowsLogo; row++) { // += 100 because use preventLoad function ??
        let currentRowLetter1 =

            drawer(+number - row, line) +
            drawer(+number + row * 2, star) +
            drawer(+number - row * 2, line) +
            drawer(+number + row * 2, star) +
            drawer(+number - row, line);
        logoPart1.push(currentRowLetter1+currentRowLetter1);//concat two M letters upper part per row
    }

    let result = logoPart1;         // copy the array
    logoPart1 = [];                 // clear the array for future inputs
    return result;                  // send the copy to the component 
}

//printing the lower part of logo
function printingLogoDownPart(number) {

    const halfRowsLogo = (number + 1) / 2;

    for (let row = 0; row < halfRowsLogo; row++) {
        let currentRowLetter2 =

            drawer((number - 1) / 2 - row, line) +
            drawer(number, star) +
            drawer(row * 2 + 1, line) +
            drawer(((number * 2) - 1) - row * 2, star) +
            drawer(row * 2 + 1, line) +
            drawer(number, star) +
            drawer((number - 1) / 2 - (row), line);
        logoPart2.push(currentRowLetter2+currentRowLetter2); //concat two M letters lower part per row
    }

    let result = logoPart2; // copy the array
    logoPart2 = [];         // clear the array for future inputs
    return result;          // send the copy to the component 
}

export default { printingLogoUpPart, printingLogoDownPart };


