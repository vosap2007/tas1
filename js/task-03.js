const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const setImage = images.map(image => {
    const urlEl = `
    <img src=${image.url} 
    alt=${image.alt} 
    width='640'  
    class='js-list'/>`;

          const listEl = document.createElement('li');
                listEl.insertAdjacentHTML('beforeend', urlEl);

          return listEl;
  });

  const galleryEl = document.querySelector(['#gallery']);
  galleryEl.append(...setImage);

