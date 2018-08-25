{
  let currentNumber = document.querySelector(`.imageDisplayNumber`);
  let numbers = [];
  const images = document.querySelectorAll(`.jsclass`);
  let leden = [];
  const $wie = document.querySelector(`.wie`);
  const $praesidium = document.querySelector(`.preasidium`);
  const menu = document.querySelector('.menu');

  const handleMouseOver = e => {
    if (currentNumber !== e.currentTarget) {
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
      if (number.innerText === image.id) {
        if (image.classList.contains(`hiddenImages`)) {
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

  const parse = data => {
    console.log(data);
    leden = data;
    leden.forEach(lid => createPraesidium(lid));
  }

  const createPraesidium = lid => {
    console.log(lid);
    const $div = document.createElement(`div`);
    const $titel = document.createElement(`p`);
    const $naam = document.createElement(`p`);
    const $img = document.createElement(`img`);

    $titel.textContent = `${lid.titel}`;
    $naam.textContent = `${lid.naam}`;
    $img.setAttribute(`src`, `${lid.img}`);
    $img.setAttribute(`width`, `100`);
    $img.setAttribute(`height`, `100`);
    $img.classList.add(`imagePreasidium`);

    $div.appendChild($titel);
    $div.appendChild($naam);
    $div.appendChild($img);
    $div.classList.add(`praesidumFoto`);

    $wie.appendChild($div);
    $praesidium.appendChild($wie);
  }

  const clickPanel = (e) => {
    console.log(e);
    const panel = e.currentTarget;
    const list = panel.children[1];
    console.log(list);
    if (list.classList.contains('active')) {
      list.classList.remove('active');
    } else {
      list.classList.add('active');
    }
  }


  const clickMenu = (e) => {
    const menuItems = document.querySelector(`.menuContent`);

    if (menuItems.classList.contains('menu')) {
      menuItems.classList.remove('menu');
    } else {
      menuItems.classList.add('menu');
    }
  }

  const init = () => {
    numbers = document.querySelectorAll(`.marginNumbers`);
    console.log(numbers);
    numbers.forEach(number => number.addEventListener(`mouseover`, handleMouseOver));

    const url = "../assets/data/personen.json";
    fetch(url)
      .then(r => r.json())
      .then(data => parse(data));

    if (document.documentElement.clientWidth < 640) {
      const panels = document.querySelectorAll('.updateLeden');
      panels.forEach(panel => {
        panel.addEventListener(`click`, clickPanel);
        console.log(panel);
      })
    } else {

      const menuItems = document.querySelectorAll(`.content`);

      menuItems.forEach(item => {
        item.classList.remove(`content`);
      })
    }




    menu.addEventListener('touchstart', clickMenu);

  }
  init();

}
