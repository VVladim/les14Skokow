// external js: masonry.pkgd.js

var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // Настройки
  columnWidth: 8,
  itemSelector: '.item'
});
