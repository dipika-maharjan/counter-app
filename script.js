const valueDisplay = document.getElementById('counter-value');
const btnInc = document.getElementById('increaseBtn');
const btnDec = document.getElementById('decreaseBtn');
const btnReset = document.getElementById('resetBtn');

let count = 0;

btnInc.addEventListener('click', () => {
    count++; // Increment logic
    updateDisplay();
});

btnDec.addEventListener('click', () => {
    count--;
    updateDisplay();
});

btnReset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    valueDisplay.textContent = count;
    
    if (count > 0) valueDisplay.style.color = "green";
    else if (count === 0) valueDisplay.style.color = "black";
}