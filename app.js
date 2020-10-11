var app = angular.module('lunchcheck',[]);
app.controller('lunchcheckcontroller', function($scope){
  $scope.input ='';
$scope.messages = '';
$scope.submitform=function(){
  var array =$scope.input.split(',');
  if( array.length<=3){
    $scope.messages="enjoy";

  }else{
    $scope.messages ="you gotta to stop";
  }
};






});
