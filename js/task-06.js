const inputEl = document.querySelector(['#validation-input']);
inputEl.addEventListener('input', countsNumberOfCharacters);
inputEl.addEventListener('blur', () => {
    addClass();
});

let numberOfCharacters = 0;

function countsNumberOfCharacters(e) {
   numberOfCharacters = e.currentTarget.value.length;
};

function addClass() {
    if(numberOfCharacters === 0) {
    inputEl.classList.remove('valid', 'invalid');
   }else if (numberOfCharacters <= inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
   } else {inputEl.classList.add('invalid')}  
};





