const inputEl = document.querySelector(['#name-input']);
inputEl.addEventListener('input', onInput);

const nameSpan = document.querySelector(['#name-output']);




function onInput(event) {
    nameSpan.textContent = event.currentTarget.value;
};