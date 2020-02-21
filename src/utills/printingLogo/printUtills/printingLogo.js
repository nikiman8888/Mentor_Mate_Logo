import drawer from './drawer';
const line = '-';
const star = '*';
let letterM = '';
let logoPart1 = [];
let logoPart2 = [];


// printing the upper part of logo
function printingLogoUpPart(number) {
    const halfRowsLogo = (+number + 1) / 2;

    for (let row = 0; row < halfRowsLogo; row++) {
        
        letterM =
            drawer(+number - row, line) +          
            drawer(+number + row * 2, star) +
            drawer(+number - row * 2, line) +
            drawer(+number + row * 2, star) +
            drawer(+number - row, line);      
          
        logoPart1.push(letterM.concat(letterM)); // pushing in array every row of Logo
    }

    let result = logoPart1;         // copy the array
    logoPart1 = [];                 // clear the array for future inputs
    return result;                  // send the copy to the component 
}

//printing the lower part of logo
function printingLogoDownPart(number) {

    const halfRowsLogo = (number + 1) / 2;

    for (let row = 0; row < halfRowsLogo; row++) {
        letterM =
            drawer((number - 1) / 2 - row, line) +
            drawer(number, star) +
            drawer(row * 2 + 1, line) +
            drawer(((number * 2) - 1) - row * 2, star) +
            drawer(row * 2 + 1, line) +
            drawer(number, star) +
            drawer((number - 1) / 2 - (row), line);

        logoPart2.push(letterM.concat(letterM))  // pushing in array every row of Logo
    }
    
    let result = logoPart2; // copy the array
    logoPart2 = [];         // clear the array for future inputs
    return result;          // send the copy to the component 
}

export default {printingLogoUpPart,printingLogoDownPart};


