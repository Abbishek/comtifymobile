// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  

})

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('index', {
            url: '/',
            templateUrl: 'index.html',
            controller: 'MainController'
        });

        $urlRouterProvider.otherwise("/");
    });

app.controller("MainController", ['$scope', function ($scope) {
    $scope.test = "";
}]);

// angular.module('ionicApp', ['ionic'])

app.controller('Ctrl', function ($scope) {
    $scope.data = {};
    $scope.data.bgColors = [];
    $scope.data.currentPage = 0;

    for (var i = 0; i < 10; i++) {
        $scope.data.bgColors.push("bgColor_" + i);
    }

    var setupSlider = function () {
        //some options to pass to our slider
        $scope.data.sliderOptions = {
            initialSlide: 0,
            direction: 'horizontal', //or vertical
            speed: 300 //0.3s transition
        };

        //create delegate reference to link with slider
        $scope.data.sliderDelegate = null;

        //watch our sliderDelegate reference, and use it when it becomes available
        $scope.$watch('data.sliderDelegate', function (newVal, oldVal) {
            if (newVal != null) {
                $scope.data.sliderDelegate.on('slideChangeEnd', function () {
                    $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
                    //use $scope.$apply() to refresh any content external to the slider
                    $scope.$apply();
                });
            }
        });
    };
    setupSlider();
})