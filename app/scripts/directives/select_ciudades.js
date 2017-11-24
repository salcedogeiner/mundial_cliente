'use strict';

/**
 * @ngdoc directive
 * @name mundialClienteApp.directive:selectCiudades
 * @description
 * # selectCiudades
 */
angular.module('mundialClienteApp')
  .directive('selectCiudades', function () {
    return {
      template: `<div>
      <select class="form-control" ng-model="ciudad" ng-options="c.codCiudad+'. '+ c.codPais.nomPais + ' - '+ c.nomCiudad for c in ciudades track by c.codCiudad">
        <option value="" disabled>Seleccionar una ciudad</option>
      </select>
      </div>`,
      restrict: 'E',
      scope:{
          ciudad:'=?'
      },
      controller:function (apiRequest,$scope) {
        $scope.load_select=function(){
          apiRequest.get("ciudades").then(function(response){
            $scope.ciudades=response.data;
          });
        };

        $scope.load_select();
      }
    };
  });
