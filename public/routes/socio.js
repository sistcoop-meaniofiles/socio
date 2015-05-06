'use strict';

angular.module('mean.socio').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
        .state('socio', {
          abstract: true,
          url: '/socio',
          templateUrl: 'socio/views/_body.html'
        })
        .state('socio.home', {
          url: '/home',
          templateUrl: 'socio/views/index.html'
        })
        .state('socio.app', {
          url: '/app',
          templateUrl: 'socio/views/app.html'
        })

        .state('socio.app.cuentasPersonales', {
          url: '/organizacion',
          template: '<ui-view></ui-view>'
        })

        .state('socio.app.cuentasPersonales.buscarCuentasPersonales', {
          url: '/buscarCuentasPersonales',
          templateUrl: 'socio/views/cuentaPersonal/form-buscar-cuentaPersonal.html',
          controller: 'Socio.BuscarCuentaPersonalController'
        });

  }
]);
