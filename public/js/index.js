(function() {

    var movieApp = angular.module('movieapp', ['ngRoute']);

    movieApp.config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'MainCtrl'
      });
    });

    movieApp.controller('MainCtrl', ['$scope', '$http', '$location', '$q', function($scope, $http, $location, $q) {
        $scope.init = function() {
            $scope.title = 'Cool';
        }

        $scope.test = function() {
            $http({
                method: 'GET',
                url: '/movie',
                params: {
                    'moviename': $scope.moviename
                }
            }).success(function(resp){
                console.log(resp);

                $scope.results = resp
            }).error(function(){
                console.log('Error happened.');
            })
        }

    }]);





})()
