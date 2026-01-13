let tcValue = 0;

const tcValueElem = document.getElementById('tc-value');
const addBtn = document.getElementById('add-btn');
const subBtn = document.getElementById('sub-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    tcValueElem.textContent = tcValue;
}

addBtn.addEventListener('click', () => {
    tcValue += 1;
    updateDisplay();
});

subBtn.addEventListener('click', () => {
    tcValue -= 0.5;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    tcValue = 0;
    updateDisplay();
});

updateDisplay();