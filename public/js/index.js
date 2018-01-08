
 var athleteProfileApp = angular.module('athleteProfile', []);

 			 athleteProfileApp.controller( 'basicInfo', function ($scope,$http,$location){

 			 $scope.basicInfo = {};
 			  var previousPage = sessionStorage.getItem("previousPage");
                                 if(previousPage == "about"){
                                     $scope.basicInfo = JSON.parse(sessionStorage.getItem("profile"));
                                     }

 			 $scope.getAthlets = function(){
                    var basicInformation = JSON.stringify($scope.basicInfo);
                    sessionStorage.setItem("basicInfo", basicInformation);
                    sessionStorage.setItem("previousPage","index");
                    window.location='/about';
 			    };
 			 });