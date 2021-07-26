const inputEl = document.querySelector(['#font-size-control']);

inputEl.addEventListener('input', (e) => {
   document.querySelector(['#text']).style.fontSize =
    `${e.currentTarget.value}px`
})




