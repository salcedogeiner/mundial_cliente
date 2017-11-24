'use strict';

/**
 * @ngdoc directive
 * @name mundialClienteApp.directive:selectConfederaciones
 * @description
 * # selectConfederaciones
 */
angular.module('mundialClienteApp')
  .directive('selectConfederaciones', function () {
    return {
      template: `<div>
      <select class="form-control" ng-model="confederacion" ng-options="c.codConfederacion+'. '+ c.nomConfederacion for c in confederaciones track by c.codConfederacion">
        <option value="" disabled>Seleccionar una confederacion</option>
      </select>
      </div>`,
      restrict: 'E',
      scope:{
          confederacion:'=?'
      },
      controller:function (apiRequest,$scope) {
        $scope.load_select=function(){
          apiRequest.get("confederaciones").then(function(response){
            $scope.confederaciones=response.data;
          });
        };

        $scope.load_select();
      }
    };
  });
