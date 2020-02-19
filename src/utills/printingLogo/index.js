import printingLogo from './printUtills/printingLogo';

//logo function call the printing logo functions
function logo(number) {

    if (number > 2 && number < 10000 && number % 2 !== 0) {

        return {
            part1: printingLogo.printingLogoUpPart(+number),
            part2: printingLogo.printingLogoDownPart(+number)
        }

    } else {
        return console.log('Please put an odd number between 2 and 10000');
    }
}

export default logo;