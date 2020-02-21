function errorHandler(number) {
    const digits = [1,2,3,4,5,6,7,8,9,0]
    if (+number <  3 || +number > 10000){
        return 'Number should be between 3 and 10 000';
    }
    if(+number%2 === 0){
        return 'Number should be odd number';
    }
   
}
export default errorHandler;