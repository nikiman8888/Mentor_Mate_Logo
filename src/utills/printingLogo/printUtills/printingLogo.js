import drawer from './drawer';
const line = '-';
const star = '*';
let letterM = '';
let array = []

// printing the upper part of logo
function printingLogoUpPart(number) {
    const halfRowsLogo = (+number + 1) / 2;

    for (let row = 0; row < halfRowsLogo; row++) {
        //debugger;
        letterM =
            drawer(+number - row, line) +          
            drawer(+number + row * 2, star) +
            drawer(+number - row * 2, line) +
            drawer(+number + row * 2, star) +
            drawer(+number - row, line);      
        
        console.log(letterM+letterM);      
        //debugger; 
    }
    return(array);
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

        console.log(letterM + letterM);
    }
}

export default {printingLogoUpPart,printingLogoDownPart};


