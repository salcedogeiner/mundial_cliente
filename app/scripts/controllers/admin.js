'use strict';

/**
 * @ngdoc function
 * @name mundialClienteApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the mundialClienteApp
 */
angular.module('mundialClienteApp')
  .controller('AdminCtrl', function ($scope, apiRequest,$window) {
    var self=this;
    $scope.tablas=['Arbitros','Ciudades','Confederaciones','Enfrenta','Equipos','Estadios','Incide','Juega','Jugadores',
                    'Paises','Participa','Regula','Tecnicos','Tiene','Torneos'];

    $scope.load_grid=function(item){
      $scope.agregar=false;
      $scope.item={};
      apiRequest.get(item,"").then(function(response){
        $scope.myData=response.data;
        $window.scrollTo(0, 0);
        self.template="views/templates/form-"+item+".html";
      })
    };

    $scope.agregar_item=function(t,item){
      console.log(t, item);
      apiRequest.post(t,item).then(function(response){
        $scope.load_grid(t);
      });
    };

    $scope.show_value=function(key, item){
      if (typeof(item)=="object") {
        return $scope.show_value(key,item[key]);
      } else {
        return item;
      }
    };

  });
