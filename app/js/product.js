
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => {
  item.addEventListener('click', () => {
    const { itemValue} = item.dataset;
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
})
});
let elem = document.getElementById('burger');
  let elem1 = document.getElementById('menu-adaptive');
  let elem2 = document.getElementById('wrapper');
  elem.onclick = function(event){
    elem.classList.toggle('active');    
    elem1.classList.toggle('active');
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
  let elem0 = document.getElementById('menu-adaptive__item--submenu');
  let elem06 = document.getElementById('menu-adaptive__item--submenu-item');
  elem0.onclick = function(event){
    elem06.classList.toggle('active-block');
  }
  let like = document.getElementById('save-bookmark');
  like.onclick = function(event){
    like.classList.toggle('js-active');
  }
=======
>>>>>>> parent of 6371368... 123
=======
>>>>>>> parent of 6371368... 123
=======
>>>>>>> parent of 6371368... 123
=======
>>>>>>> parent of 6371368... 123
var galleryThumbs = new Swiper('.product-item__gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      
    },
  });
  
  var galleryTop = new Swiper('.product-item__gallery-top', {
    spaceBetween: 10,
    slidesPerView: 1,
    
    thumbs: {
      swiper: galleryThumbs
    }
  });

  {
    
}

let elem3 = document.getElementById('filters__more-settings');
  let elem4 = document.getElementById('filters__select-container--hidden');
  elem3.onclick = function(event){
    elem4.classList.toggle('active-select');
    elem3.classList.toggle("js-active")
  }
  let elem5 = document.getElementById('menu-adaptive__item--submenu');
  let elem6 = document.getElementById('menu-adaptive__item--submenu-item');
  elem5.onclick = function(event){
    elem6.classList.toggle('active');
  }





<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
  var genericExamples = document.querySelectorAll('[data-trigger]');
  for (i = 0; i < genericExamples.length; ++i) {
    var element = genericExamples[i];
    new Choices(element, {
      placeholderValue: 'This is a placeholder set in the config',
      noResultsText:'Нет результатов'
    });
  }});
  
=======
//создаем вложенность созданных элементов
customSelect.append(customSelectCurrent, customSelectList)

//добавляем кастоный "select" сразу после оргинального "select"
select.after(customSelect)

//получаем список и значения "option" из "select", затем создаём кастомный "option" для кастоного "select"
const createCustomDom = function(x, y){
let selectItems = ''
// for(option of options){
// selectItems += `<button type="button" class="custom-select__item" data-value="${option.value}">${option.text}</button>`
// }
for(var i = 0; i < options.length; i++){
selectItems += '<button type="button" class="custom-select__item" data-value="'+options[i].value+'">'+options[i].text+'</button>'
}
customSelectList.innerHTML = selectItems
x(),y();
}

//открываем-закрываем выпадающий список по клику
const toggleClass = () => {customSelect.classList.toggle('custom-select--show')}

//присваиваем текстовое первое значение "option" в кастомном "select"
const currentTextValue = () => customSelectCurrent.textContent = customSelectList.children[0].textContent

//получаем и задаем значения text/value
const currentValue = () => {
const items = customSelectList.children
for(var el = 0; el < items.length; el++){
let selectValue = items[el].getAttribute('data-value')
let selectText = items[el].textContent
items[el].addEventListener('click', () => {
customSelect.classList.remove('custom-select--show')
customSelectCurrent.textContent = selectText
select.value = selectValue
})
}
}

const desctopFn = () => {
customSelectCurrent.addEventListener('click', toggleClass)
}

const mobileFn = () => {
for(let j = 0; j < selects.length; j++){
let mobileSelect = selects[j]
mobileSelect.addEventListener('change', ()=> {
mobileSelect.nextElementSibling.querySelector('.custom-select__current').textContent = mobileSelect.value
})
}
}

createCustomDom(currentTextValue, currentValue)


//закрываем выпадающий список по клику вне области кастомного селекта
document.addEventListener('mouseup', (e) =>{
if (!customSelect.contains(e.target)) customSelect.classList.remove('custom-select--show')
})

detectmob(mobileFn, desctopFn)

function detectmob(x,y) {
if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
){
x();
}
else {
y();
}
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> parent of 6371368... 123
=======
}
>>>>>>> parent of 6371368... 123
=======
}
>>>>>>> parent of 6371368... 123
=======
}
>>>>>>> parent of 6371368... 123
