angular.module('angappRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider

      .when('/home',{
          templateUrl: 'views/home.html',
          controller: 'HomeController'
      })


      .when('/about',{
          templateUrl: 'views/about.html',
          controller: 'AboutController'
      })

      .when('/register',{
          templateUrl: 'views/register.html',
          controller: 'RegisterController'
      })

      .when('/update',{
        templateUrl: 'views/update.html',
        controller: 'UpdateController'
    })

    .when('/update/:id',{
        templateUrl: 'views/edit_update.html',
        controller: 'UpdateController'
    })

      .when('/show',{
          templateUrl: 'views/show.html',
          controller: 'ShowController'
      })

      .when('/contact',{
          templateUrl: 'views/contact.html',
          controller: 'ContactController'
      });
$locationProvider.html5Mode(true);
}]);