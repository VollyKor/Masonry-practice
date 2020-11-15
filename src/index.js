import './styles.css';
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import template from "./template/template.hbs"
// Установлены плагины Masonry, Imagesloaded, HandleBars
// Стили, опции и картинки использованы с примеров
//  https://codepen.io/desandro/pen/MwJoZQ
//  https://codepen.io/desandro/pen/nhekz


//  Ссылки на элементы 
const ref = document.querySelector(".grid");
const appendButton = document.querySelector('.append');

//  Импорт шаблона 
const markup = template()


//  Инициализация Masonry
//  ======================
const options = {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
}
const msnry = new Masonry(ref, options)

//  сортировка изображений после их загрузки
// =================================
imagesLoaded(ref, () => {
  console.log('imd loaded');
  msnry.layout()
})

// функция преобразующая шаблон в массив елементов 
// Так как из DocumentFragment() не получилось получить какой то список елементов,
// необходимый для Masonry пришлось искать другой способ   
// ===============================================


//  по клику на кнопку добавляем картинки и всю магию
// ================================



//  Вариант 1
// с использованием DocumentFragment()
// =============================

//  !!! Отличается от функции в варианте 1 
// в варианте 2 мы используем .children 

const getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes

appendButton.addEventListener('click', () => {

  //  Создаем список узлоав из шаблона 
  const nodes = getNodes(markup);

  //  фиксируем высоту документа перед добавлением елементов 
  const scrollheigth = document.body.scrollHeight

  //  создаем пустой DocumentFragment(), так как
  //  добавить туда аргументом ни массив, ни объект, ни шаблон, у меня не получилось 
  const newFragment = new DocumentFragment()

  //   добавляем в DocumentFragment() елементы из списка

  //  Вариант 1 
  // nodes.forEach(e => {
  //   newFragment.appendChild(e)
  // })

  //  Вариант 2
  newFragment.append(...nodes)

  // создаем объект в формате Node-list, для метода msnry.appended(nodelist)
  // бонус в том что можно дабавить елементы по селекторам css
  const nodeList = newFragment.querySelectorAll(".grid-item")
  console.log(nodeList);
  //  добавляем в DOM все елементы за 1 операцию
  ref.appendChild(newFragment);

  // когда все елементы загрузились заново сортируем картинки 
  imagesLoaded(ref, () => {
    msnry.appended(nodeList);

    // Скролим екран до новых елементов
    window.scrollTo({
      top: scrollheigth,
      behavior: "smooth"
    })
  })
});


//  Вариант 2 
// Без использования DocumentFragment()
//  Намного меньше кода
// ==============================

//  !!! Отличается от функции в варианте 1 
// в варианте 1 мы используем .childNodes, 
  // const getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.children


  // appendButton.addEventListener('click', () => {

  //     //  Создаем список узлоав из шаблона 
  //     const nodes = getNodes(markup);
  //     //  преобразовываем в массив, который подходит для метода msnry.appended(arr);
  //     const arr = Array.from(nodes) 

  //     // добавляем елементы в DOM 
  //     ref.append(...nodes);

  //     // Фиксируем высоту экрана до появления новых елементов
  //     const scrollheigth = document.body.scrollHeight

  //     //  когда картинки загрузились, сортируем их, скролим до начала новых
  //   imagesLoaded(ref , () => {
  //     msnry.appended(arr);
  //     window.scrollTo({
  //       top: scrollheigth,
  //       behavior: "smooth"
  //     })
  //   })
// });