
const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.toString().slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}
function calculateResult() {
        display.value = eval(display.value);
    }
