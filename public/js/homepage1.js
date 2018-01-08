 var athleteProfileApp = angular.module('athleteProfile', []);

 			 athleteProfileApp.controller( 'homepageController', function ($scope,$http,$location){

 			    $scope.Submit = function(){
                 		$http({
                                            method: 'GET',
                                            url: 'api/athlets'

                                            }).success(function(response){


                                                   $scope.athlets= response;



                                            }).error(function(error){
                                                console.log("we are in error!!");
                                                 alert(" Failed!!");
                                            });
                 			    }
 			 });