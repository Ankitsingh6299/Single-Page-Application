angular.module('ShowCtrl', []).controller('ShowController', function ($scope, $http) {

    $scope.retrieve_data = function () {
        $http.get('/api/contacts', $scope.data).then(function (response) {
            $scope.recieve = response.data;
            console.log(response);
            
        })
    }

});