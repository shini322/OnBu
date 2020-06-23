// $(".burger").click(function() {
//     $(this).toggleClass("active");
//     $(".main-menu").toggleClass("active")
//   });

  let elem = document.getElementById('burger');
  let elem1 = document.getElementById('menu-adaptive');
  elem.onclick = function(event){
    elem.classList.toggle('active');    
    elem1.classList.toggle('active');
  }