

window.addEventListener('scroll', function() {
    let menu = document.querySelector('.header__inner');
    
    if (window.pageYOffset > 10) {
                menu.classList.add('header__inner--scrolling');
            } else {
                menu.classList.remove('header__inner--scrolling');
            }
  });

  window.addEventListener('click', function() {
     let btn = document.querySelector('.menu__btn-line');
  
     btn.addEventListener('click', ()=> {
        document.querySelector('.menu-mobile__list').classList.toggle('menu-mobile__list--active');
     });
  });
  

