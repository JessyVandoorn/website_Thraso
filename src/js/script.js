{
  let currentNumber = document.querySelector(`.imageDisplayNumber`);
  let numbers = [];
  const images = document.querySelectorAll(`.jsclass`);

  const handleMouseOver = e => {
    if(currentNumber !== e.currentTarget){
      addItemNav(currentNumber);
      removeImageDisplay(currentNumber);
      currentNumber = e.currentTarget;
      removeItemNav(currentNumber);
      addImageDisplay(currentNumber);
    }

    showImage(currentNumber);
  }

  const showImage = number => {
    images.forEach(image => {
      if(number.innerText === image.id){
        if(image.classList.contains(`hiddenImages`)){
          image.classList.remove(`hiddenImages`);
          image.classList.add(`displayImage`);
        }
      } else {
        image.classList.add(`hiddenImages`);
      }
    })
  }

  const addItemNav = (e) => {
    e.classList.add(`itemNav`);
  }

  const removeImageDisplay = e => {
    e.classList.remove(`imageDisplayNumber`);
  };

  const removeItemNav = (e) => {
    e.classList.remove(`itemNav`);
  }

  const addImageDisplay = e => {
    e.classList.add(`imageDisplayNumber`);
  };

  const init = () => {
      numbers = document.querySelectorAll(`.marginNumbers`);
      console.log(numbers);
      numbers.forEach(number => number.addEventListener(`mouseover`, handleMouseOver));
}
    init();

}
