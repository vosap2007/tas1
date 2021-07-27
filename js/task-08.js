const boxesEl = document.querySelector(['#boxes']);
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');

const inputEl = document.querySelector('input');
const colors = [ "red", "blue", "green", "orange", "aqua", "violet", "tomato" ];
let inputVlue = 0;

inputEl.addEventListener('input',  e =>  
inputVlue = e.currentTarget.value);  
    
renderBtnEl.addEventListener('click', () => {
    howManyTimesCall(inputVlue);
})

destroyBtnEl.addEventListener('click', () => {
    destroyBoxes();
})

function createsRandomColor(arrColors) {
        return arrColors[Math.floor(Math.random() * arrColors.length)];
};

function howManyTimesCall(amount) {
    let sizeBox = 30;

for (let i = 0; i < amount; i++) {
    const color = createsRandomColor(colors);
    const newSize = sizeBox += 30;

    createBoxes(color, newSize);
}}

function createBoxes(color, newSize) {
   const divEl = document.createElement('div');

   divEl.style.width = `${newSize}px`;
   divEl.style.height = `${newSize}px`;
   divEl.style.backgroundColor = color;
   boxesEl.append(divEl);
};

function destroyBoxes() {
    boxesEl.remove('divEl');
}

