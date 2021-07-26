const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const getsIngredient = ingredients.map (ingredient => {
    const createList = document.createElement('li');
    createList.textContent = ingredient;
    
    return createList;
  });

  const ingredientsEl = document.querySelector(['#ingredients']);

  ingredientsEl.append(...getsIngredient);
  