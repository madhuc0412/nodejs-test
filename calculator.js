

class CalculatorService {

    Addition(number1, number2) {

        return parseInt(number1) + parseInt(number2);
        
    }


}

let calculatorService = new CalculatorService();
module.exports = calculatorService;