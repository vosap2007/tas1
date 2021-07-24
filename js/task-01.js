 const listItem = document.querySelectorAll('.item');

console.log(`В списке ${listItem.length} категории.` );



  const newArr = listItem.forEach(list => {
      const listName = list.firstElementChild.textContent
      console.log(`Категория: ${listName}`);

    const listElements = list.lastElementChild.children.length;
    console.log(`Количество элементов: ${listElements}`);
    });
