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
  var app = angular.module('cortana', ['mgcrea.ngStrap.typeahead', 'mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.affix']);

  app.controller('MainCtrl', function($scope) {
  });

  'use strict';

  app.controller('cortana-search', function($scope, $templateCache, $http) {

    $scope.selectedIcon = '';
    $scope.icons = [
      {value: 'Gear', label: '<a href="#"><p class="cortana-search-title">Gear</p></a>'},
      {value: 'Globe', label: '<a href="#"><p class="cortana-search-title">Globe</p></a>'}
    ];

    $scope.selectedAddress = '';
    $scope.getAddress = function(viewValue) {
      var params = {address: viewValue, sensor: false};
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
      .then(function(res) {
        return res.data.results;
      });
    };

  });
})();