/* ==========================================================
 * app.js
 * Angular scripts
 *
 * Author: Yann Gouffon, hello@yago.io
 *
 * Copyright 2014 Yann Gouffon
 * Licensed under MIT
 ========================================================== */

(function(){
  var app = angular.module('cortana', ['mgcrea.ngStrap', 'ui.bootstrap']);

  app.controller('MainController', function($scope) {
  });

  app.controller('SearchController', function($scope) {

    $scope.selectedIcon = 'asdasd';
    $scope.icons = [
      {value: 'Gear', label: 'Gear'},
      {value: 'Globe', label: '<a href="#"><p class="cortana-search-title">Globe</p></a>'}
    ];

  });
})();