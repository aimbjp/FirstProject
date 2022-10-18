// search groups
const list = document.querySelectorAll('.cell li');
const search = document.querySelector('[data-search]');


search.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    console.log(value);
    list.forEach(item => {
        const isVissible = item.innerHTML.toLowerCase().includes(value);
        item.classList.toggle('hide', !isVissible);
    })
});


// show menu bar

menu = document.querySelector('#menu');
menuList = document.querySelector('#listUl');

menu.addEventListener('click', () => {
    if (!menuList.classList.contains('hide')) {
        menuList.classList.add('hide');
    } else {
        menuList.classList.remove('hide');
    }
});


// menu button click

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});
