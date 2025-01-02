let display = document.getElementById('calculator-display');
let displayItems = document.getElementById('display-items');

function appendToDisplay(value) {
  display.value += value;
}

function appendToItemisedList(value) {
  displayItems.value += value +'\n';
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid calculation');
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}
