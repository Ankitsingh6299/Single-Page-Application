angular.module('UpdateCtrl',[]).controller('UpdateController',function($scope,$http,$routeParams){

    $scope.retrieve_data=function(){

        $http.get('/api/contacts').then(function(response){
            console.log(response)
            $scope.recieve=response.data;
        });
    };

    $scope.retrieve_ind=function(){
        $http.get('/api/contacts/'+$routeParams.id).then(function(response){
       console.log(response)
       $scope.recieve_ind=response.data;

        });
    };

    $scope.update_data=function(id){
        $scope.data = $scope.recieve_ind[0];

        $http.put('/api/contacts/'+id,JSON.stringify($scope.data)).then(function(response){

            console.log(response)
        });
    };

});