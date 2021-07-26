const boxesEl = document.querySelector(['#boxes']);
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const inputEl = document.querySelector('input');

function valueInput() {
    inputEl.addEventListener('input', e => {
  console.log(e.currentTarget.value);  
})}

console.log(valueInput())



renderBtnEl.addEventListener('click', () => {
    howManyTimesCall(7);
})

const colors = [ "red", "blue", "green", "orange", "aqua", "violet", "tomato" ];

function createsRandomColor(arrColors) {
        return arrColors[Math.floor(Math.random() * arrColors.length)];
};

function howManyTimesCall(amount) {
for (let i = 0; i < amount; i++) {
    const color = createsRandomColor(colors);
    createBoxes(color);
}}

function createBoxes(color) {
   const divEl = document.createElement('div');
   divEl.style.width = '30px';
   divEl.style.height = '30px';
   divEl.style.backgroundColor = color;
   boxesEl.append(divEl);
};

