'use strict';

/**
 * @ngdoc directive
 * @name mundialClienteApp.directive:selectTecnicos
 * @description
 * # selectTecnicos
 */
angular.module('mundialClienteApp')
  .directive('selectTecnicos', function () {
    return {
      template: `<div>
      <select class="form-control" ng-model="tecnico" ng-options="t.codTecnico+'. '+ t.nomTecnico + ' '+ t.apeTecnico + ' - ' +
      t.codPais.codPais for t in tecnicos track by t.codTecnico">
        <option value="" disabled>Seleccionar un tecnico</option>
      </select>
      </div>`,
      restrict: 'E',
      scope:{
          tecnico:'=?'
      },
      controller:function (apiRequest,$scope) {
        $scope.load_select=function(){
          apiRequest.get("tecnicos").then(function(response){
            $scope.tecnicos=response.data;
          });
        };

        $scope.load_select();
      }
    };
  });
