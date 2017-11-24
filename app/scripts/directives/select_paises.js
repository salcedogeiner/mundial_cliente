'use strict';

/**
 * @ngdoc directive
 * @name mundialClienteApp.directive:selectPaises
 * @description
 * # selectPaises
 */
angular.module('mundialClienteApp')
  .directive('selectPaises', function () {
    return {
      template: `<div>
      <select class="form-control" ng-model="pais" ng-options="p.codPais+'. '+ p.nomPais for p in paises track by p.codPais">
        <option value="" disabled>Seleccionar un pais</option>
      </select>
      </div>`,
      restrict: 'E',
      scope:{
          pais:'=?'
      },
      controller:function (apiRequest,$scope) {
        $scope.load_select=function(){
          apiRequest.get("paises").then(function(response){
            $scope.paises=response.data;
          });
        };

        $scope.load_select();
      }
    };
  });
