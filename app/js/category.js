let elem = document.getElementById('burger');
  let elem1 = document.getElementById('menu-adaptive');
<<<<<<< HEAD
  let elem2 = document.getElementById('sub');
  var bodyNode = document.body || document.getElementsByTagName('body')[0];
=======
  let elem2 = document.getElementById('wrapper');
>>>>>>> parent of 6371368... 123
  elem.onclick = function(event){
    bodyNode.classList.toggle('js-hidden');
    elem.classList.toggle('active');    
    elem1.classList.toggle('active');
<<<<<<< HEAD
    elem2.classList.toggle('active-block');
   
    
=======
>>>>>>> parent of 6371368... 123
  }
  // let submenu_list = document.querySelectorAll('.menu-adaptive__item--submenu-item');
  // let submenu_item = document.querySelectorAll('.menu-adaptive__item--submenu');

  
  // for (var i = 0; i < submenu_item; i++) {
  //   submenu_item[i].addEventListener('click', function (){
  //     this.classList.toggle('active');
  //   });
  // }

  const submenu_list = document.querySelectorAll('.menu-adaptive__item--submenu');
  const submenu_item = document.querySelectorAll('.menu-adaptive__item--submenu-item');
  const first_level =  document.getElementById('first-level');
 

   for (var i = 0; i < submenu_list.length; i++) {
    submenu_list[i].addEventListener('click',  (e) => {
    event.preventDefault();
    theTarget = event.target;
    theTarget2 = theTarget.parentElement;
    theTarget2.classList.toggle("active");
    first_level.classList.toggle("js-active")
});
}

let elem3 = document.getElementById('category__more-settings');
  let elem4 = document.getElementById('category__block--md');
  elem3.onclick = function(event){
    elem4.classList.toggle('active-block');
  }

<<<<<<< HEAD
  // let elem5 = document.getElementById('menu-adaptive__item--submenu');
  // let elem6 = document.getElementById('menu-adaptive__item--submenu-item');
  // elem5.onclick = function(event){
  //   elem6.classList.toggle('active-block');
  // }

 
//   submenu_item.addEventListener('click', function () {
        
//     for (let i = 0; i < submenu_item.length; i++) {
//      (submenu[i]).classList.add('js-active');
//    }

// });


  document.addEventListener('DOMContentLoaded', function() {
    var genericExamples = document.querySelectorAll('[data-trigger]');
    for (i = 0; i < genericExamples.length; ++i) {
      var element = genericExamples[i];
      new Choices(element, {
        placeholderValue: 'This is a placeholder set in the config',
        noResultsText:'Нет результатов'
      });
    }});
    
  
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => {
  item.addEventListener('click', () => {
    const { itemValue} = item.dataset;
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
})
});


=======
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

  //Получаем все "select" по селектору
const selects = document.querySelectorAll('.custom-select')
//переборка по полученным "select"
for(let i = 0; i < selects.length; i++){
const select = selects[i]
//получаем все "option" внутри "select"
const options = select.querySelectorAll('option')

//создаем кастомный "select"
const customSelect = document.createElement('div')
const customSelectList = document.createElement('div')
const customSelectCurrent = document.createElement('button')

select.setAttribute('tabindex', '-1')
//задем классы и атрибуты кастомному "select"
customSelect.className = 'custom-select'
customSelectList.className = 'custom-select__list'
customSelectCurrent.className = 'custom-select__current'

//по умолчанию у button будет type="submit", поэтому меням на type="button" чтобы избежать отправку формы при клие на кастомный "select"
customSelectCurrent.setAttribute('type', 'button')

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
}
  
  
>>>>>>> parent of 6371368... 123
