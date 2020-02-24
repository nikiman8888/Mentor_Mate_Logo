import {loopPreventLoadUpperPart,loopPreventLoadLowerPart} from './loopPreventLoad';

let logoPart1 = [];
let logoPart2 = [];
let currentRowLetter1;
let currentRowLetter2;

// printing the upper part of logo
function printingLogoUpPart(number) {
    const halfRowsLogo = (+number + 1) / 2;

    for (let row = 0; row < halfRowsLogo; row += 100) { 
        
        if(halfRowsLogo - row < 100){
            // if input is less than 100 or printing last rows less than 100
            currentRowLetter1  = loopPreventLoadUpperPart(+number,row,halfRowsLogo-row);
            
        }else{
            // if input is more then 100 we looping to 100 to prevent long loop loading
            // looPreventLoad function is something like midlleware to make less presure ,when input number is bigger
            currentRowLetter1  = loopPreventLoadUpperPart(+number,row,100);
            
        }
           // the returned array we transform in string in prepare for the component rendering
        for (let i = 0; i < currentRowLetter1.length; i++) {
           let resultRow = currentRowLetter1[i] + currentRowLetter1[i];
           logoPart1.push(resultRow);   
        }
    }

    let result = logoPart1;         // copy the array
    logoPart1 = [];                 // clear the array for future inputs
    return result;                  // send the copy to the component 
}

//printing the lower part of logo
function printingLogoDownPart(number) {

    const halfRowsLogo = (number + 1) / 2;

    for (let row = 0; row < halfRowsLogo; row+=100) {
        if(halfRowsLogo - row < 100){
            // if input is less than 100 or printing last rows less than 100
            currentRowLetter2  = loopPreventLoadLowerPart(+number,row,halfRowsLogo-row);
            debugger;
            
        }else{
            // if input is more then 100 we looping to 100 to prevent long loop loading
            // looPreventLoad function is something like midlleware to make less presure ,when input number is bigger
            currentRowLetter2  = loopPreventLoadLowerPart(+number,row,100);
            
        }
        for (let i = 0; i < currentRowLetter1.length; i++) {
            let resultRow = currentRowLetter2[i] + currentRowLetter2[i];
            logoPart2.push(resultRow);   
         }
        
        //logoPart2.push(currentRowLetter2+currentRowLetter2); //concat two M letters lower part per row
    }

    let result = logoPart2; // copy the array
    logoPart2 = [];         // clear the array for future inputs
    return result;          // send the copy to the component 
}

export default { printingLogoUpPart, printingLogoDownPart };


