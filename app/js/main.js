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

  var galleryThumbs = new Swiper('.product-item__gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.product-item__gallery-top', {
    spaceBetween: 0,
    thumbs: {
      swiper: galleryThumbs
    }
  });