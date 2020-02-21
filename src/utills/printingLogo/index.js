import printingLogo from './printUtills/printingLogo';

//logo function call the printing logo functions
function logo(number) {

    if (number > 2 && number < 10000 && number % 2 !== 0) {

        return {
            part1: printingLogo.printingLogoUpPart(+number),  // upper part of logo
            part2: printingLogo.printingLogoDownPart(+number) // lower part of logo
        }
    } 
}

export default logo;