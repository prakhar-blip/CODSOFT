// Function to append characters to the display
    function appendToDisplay(value) {
        if (document.getElementById('display').innerHTML === '0' && value !== '.') {
            document.getElementById('display').innerHTML = '';
        }
        document.getElementById('display').innerHTML += value;
    }

    // Function to clear the display
    function clearDisplay() {
        document.getElementById('display').innerHTML = '0';
    }

    // Function to calculate the result
    function calculate() {
        var expression = document.getElementById('display').innerHTML;
        var result = eval(expression);
        document.getElementById('display').innerHTML = result;
    }

    // Event listener for keyboard input
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const operators = ['+', '-', '*', '/'];

        if (key >= '0' && key <= '9') {
            appendToDisplay(key);
        } else if (key === '.' && !document.getElementById('display').innerHTML.includes('.')) {
            appendToDisplay(key);
        } else if (operators.includes(key)) {
            appendToDisplay(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            var currentDisplay = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = currentDisplay.slice(0, -1);
        }
    });