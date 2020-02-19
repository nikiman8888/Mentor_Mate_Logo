function errorHandler(number) {
    if (number <  3 || number > 10000){
        return 'Number should be between 3 and 10 000';
    }
    if(number%2 === 0){
        return 'Number should be odd number';
    }
}
export default errorHandler;