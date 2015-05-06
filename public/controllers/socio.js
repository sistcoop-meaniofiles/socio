'use strict';

/* jshint -W098 */
angular.module('mean.socio').controller('SocioController', ['$scope', 'Global', 'Socio',
  function($scope, Global, Socio) {
    $scope.global = Global;
    $scope.package = {
      name: 'socio'
    };
  }
]);
