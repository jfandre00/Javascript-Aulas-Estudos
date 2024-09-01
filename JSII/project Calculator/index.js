const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try { // try to evaluate the expression
        display.value = eval(display.value); // takes an expression and evaluates it and returns the result - it´s a calculator function inside the calculator ha!
    }
    catch(error) {
        display.value = "Error";
    }
}