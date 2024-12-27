
const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function appendNumber(value) {
    display.value += value;
}
function calculateResult() {
        display.value = eval(display.value);
    }
