
var app = angular.module('app', ['ui.bootstrap', 'ngAnimate'])

app.controller('busquedaController', ['$scope', function($scope){
    $scope.lista = [
        {lorem: 'aaaaaa', ipsum: 'aaaaaa', dolor:'aaaaaa', sit:'aaaaaa', amet:'$ 200.000'},
        {lorem: 'bbbbbb', ipsum: 'bbbbbb', dolor:'bbbbbb', sit:'bbbbbb', amet:'$ 100.000'},
        {lorem: 'cccccc', ipsum: 'cccccc', dolor:'cccccc', sit:'cccccc', amet:'$ 50.000'},
        {lorem: 'dddddd', ipsum: 'dddddd', dolor:'dddddd', sit:'dddddd', amet:'$ 200.000'},
        {lorem: 'eeeeee', ipsum: 'eeeeee', dolor:'eeeeee', sit:'eeeeee', amet:'$ 100.000'},
        {lorem: 'ffffff', ipsum: 'ffffff', dolor:'ffffff', sit:'ffffff', amet:'$ 50.000'},
        {lorem: 'gggggg', ipsum: 'gggggg', dolor:'gggggg', sit:'gggggg', amet:'$ 200.000'},
        {lorem: 'hhhhhh', ipsum: 'hhhhhh', dolor:'hhhhhh', sit:'hhhhhh', amet:'$ 100.000'},
        {lorem: 'iiiiii', ipsum: 'iiiiii', dolor:'iiiiii', sit:'iiiiii', amet:'$ 50.000'}
    ];
}]);

app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = true;
});