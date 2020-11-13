import './styles.css';
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

const ref = document.querySelector(".grid");
const options = {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
}
const msnry = new Masonry(ref, options )

imagesLoaded( ref, () => {
    console.log('imd loaded');
    msnry.layout()
})

// imagesLoaded( ref ).on( 'progress', function() {
//     // layout Masonry after each image loads
//     msnry.layout();
//   });


  // external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
// var grid = document.querySelector('.grid');
// const btn = document.querySelector('.append');

// var msnry = new Masonry( grid, {
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   percentPosition: true
// });

// imagesLoaded( grid ).on( 'progress', function() {
//   // layout Masonry after each image loads
//   msnry.layout();
// });


// var appendButton = document.querySelector('.append');
// appendButton.addEventListener( 'click', function() {
// //   create new item elements
//   var elems = [];
//   var fragment = document.createDocumentFragment();
//   for ( var i = 0; i < 3; i++ ) {
//     var elem = getItemElement();
//     fragment.appendChild( elem );
//     elems.push( elem );
//   }
//   // append elements to container
//   ref.appendChild( fragment );
//   // add and lay out newly appended elements
//   msnry.appended( elems );
// });

// create <div class="grid-item"></div>
// function getItemElement() {
//     var elem = document.createElement('div');
//     var wRand = Math.random();
//     var hRand = Math.random();
//     var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
//     var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
//     elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
//     return elem;
//   }