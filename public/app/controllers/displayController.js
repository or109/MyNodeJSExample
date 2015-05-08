'use strict';
app.controller('displayController', ['$scope', '$location','$http', '$templateCache', 'authService','$rootScope' ,function ($scope, $location,$http ,$templateCache,authService,$rootScope) {


    $scope.searchtext = 'iphone';
    $scope.message ='';
    $scope.testFun = $rootScope.testRoot;
    $scope.testProduct = [];
    
<<<<<<< HEAD
    $scope.searchProduct = function(txt){
      authService.searchGoogle(txt).then(function (results) {
            $scope.testProduct = results.data;
             $rootScope.testRoot = results.data;
            $location.path('/display');
        });
    };
=======
>>>>>>> d40158de68831b14ac765f9f4fc373632f20ba4d
   
}]);