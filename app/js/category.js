let elem = document.getElementById('burger');
  let elem1 = document.getElementById('menu-adaptive');
  let elem2 = document.getElementById('wrapper');
  elem.onclick = function(event){
    elem.classList.toggle('active');    
    elem1.classList.toggle('active');
  }
  

let elem3 = document.getElementById('category__more-settings');
  let elem4 = document.getElementById('category__block--md');
  elem3.onclick = function(event){
    elem4.classList.toggle('active-block');
  }

  let elem5 = document.getElementById('menu-adaptive__item--submenu');
  let elem6 = document.getElementById('menu-adaptive__item--submenu-item');
  elem5.onclick = function(event){
    elem6.classList.toggle('active');
  }
  var starRatingStep = raterJs( {
    starSize:25,
    rating:4.5, 
    step:0.5, 
    element:document.querySelector("#rater"), 
    rateCallback:function rateCallback(rating, done) {
      this.setRating(rating); 
      done(); 
    }
  }); 
  
  