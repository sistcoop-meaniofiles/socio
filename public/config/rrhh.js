'use strict';

/* jshint -W098 */

angular.module('mean.socio').controller('SocioSidebarController', ['$scope', '$menuItemsSocio',
    function($scope, $menuItemsSocio) {

        $scope.menuItems = $menuItemsSocio.prepareSidebarMenu().getAll();

    }
]);