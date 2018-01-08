 var athleteProfileApp = angular.module('athleteProfile', []);

 			 athleteProfileApp.controller( 'summaryController', function ($scope,$http,$location){
 			 console.log("inside summaryController");
 			 $scope.profileInfo = JSON.parse(sessionStorage.getItem("profile"));
 			 var athletInfo = JSON.parse(sessionStorage.getItem("profile"));

 			    $scope.goToAbout = function(){
 			        sessionStorage.setItem("previousPage","summary");
 			        window.location='/about';
 			    };

 			    $scope.Submit = function(response){
                 		$http({
                                            method: 'POST',
                                            url: 'api/athlet',
                                             data: athletInfo

                                            }).success(function(response){
                                                    console.log("hello");
                                                       window.location='/homepage';
                                                       alert("Successfully Saved !");
                                            }).error(function(error){
                                                console.log("we are in error!!");
                                                 alert(" Failed!!");
                                            });
                 			    }
 			 });