const result = document.getElementById('result');
let currentInput = '';
let operator = '';
let previousInput = '';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            result.value = '';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                result.value = currentInput;
                operator = '';
                previousInput = '';
            }
        } else if (button.classList.contains('operator')) {
            if (!operator && currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
                result.value = previousInput + " " + operator; // 
            }
        } else {
            currentInput += value;
            result.value = previousInput + " " + operator + " " + currentInput; // 
        }
    });
});
