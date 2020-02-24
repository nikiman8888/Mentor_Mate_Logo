import drawer from './drawer';
let result = [];
let arrayContainer = [];
const line = '-';
const star = '*';

function loopPreventLoad(number,row,count) {
       
   for (let loopRow = row; loopRow < count; loopRow++) {
       arrayContainer =
       drawer(+number - loopRow, line) +
       drawer(+number + loopRow * 2, star) +
       drawer(+number - loopRow * 2, line) +
       drawer(+number + loopRow * 2, star) +
       drawer(+number - loopRow, line);
       result.push(arrayContainer);
   }
   return result;
}

export default loopPreventLoad;