// external js: masonry.pkgd.js

var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // Настройки
  columnWidth: 7,
  itemSelector: '.item'
});
