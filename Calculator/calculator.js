const calc = createCalculator(10);

console.log(calc.add(45));
console.log(calc.sub(45));
console.log(calc.divide(5));
console.log(calc.mult(5));
console.log(calc.set(100));
console.log(calc.mult(5));

/**
 * This function support arithmetical operations such as: (+) - (add()), (-) - (sub()), 
 * (/) - (divide()), (*) - (mult())
 * 
 * @param {number} baseNumber a base number for operations
 * @returns {object} Returns object with methods
 */
function createCalculator(baseNumber) {
    return calculator = {
        add(number) {
            return baseNumber + number;
        },
        sub(number) {
            return baseNumber - number;
        },
        divide(number) {
            return baseNumber / number;
        },
        mult(number) {
            return baseNumber * number;
        },
        set(newNumber) {
            return baseNumber = newNumber;
        },
    };
}