let elem7 = document.getElementById('advertisement__more-setting');
let elem8 = document.getElementById('advertisement__hidden-settings');
  elem7.onclick = function(event){  
    elem8.classList.toggle('active-block');
  }

  let elem5 = document.getElementById('menu-adaptive__item--submenu');
  let elem6 = document.getElementById('menu-adaptive__item--submenu-item');
  elem5.onclick = function(event){
    elem6.classList.toggle('active');
  }

  let elem = document.getElementById('burger');
  let elem1 = document.getElementById('menu-adaptive');
  let elem2 = document.getElementById('wrapper');
  elem.onclick = function(event){
    elem.classList.toggle('active');    
    elem1.classList.toggle('active');
  }