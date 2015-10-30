
angular.module('app', ['appMock']).controller('MainController', function($scope, BrandService) {
    $scope.brand = $scope.list = null;
    
    // a little delay to illustrate an async call
    //setTimeout(function() {
        BrandService.getBrand('1').then(function(brand) {
            $scope.brand = brand;
        });
        
        /*BrandService.findByTitle('awesome').then(function(list) {
            $scope.list = list;
        });*/
        
        BrandService.findAll().then(function(list) {
            $scope.list = list;
        });
    //}, 2000);
});
 