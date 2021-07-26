let counterValue = 0;

 const decrementBtn = document.querySelector(['#decrement']);
 const incrementBtn = document.querySelector(['#increment']);
 const counterValueEl = document.querySelector(['#value']);

 const changeValueCounter = () => counterValueEl.textContent = counterValue;

    const decremetnValue = () => {
        counterValue -= 1;
        changeValueCounter();
    };

    const incrementValue = () => {
        counterValue += 1;
        changeValueCounter();
    };
    
    const decremetn = decrementBtn.addEventListener('click', decremetnValue);
    
    const increment = incrementBtn.addEventListener('click', incrementValue);