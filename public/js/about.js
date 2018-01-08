var athleteProfileApp = angular.module('athleteProfile', []);

 			 athleteProfileApp.controller( 'aboutController', function ($scope,$http,$location){
 			 console.log("inside aboutController");
                    var previousPage = sessionStorage.getItem("previousPage");
                    if(previousPage == "summary"){
                        $scope.aboutInfo = JSON.parse(sessionStorage.getItem("profile"));
                    }
                       $scope.goToBasic = function(){
                                      			        sessionStorage.setItem("previousPage","about");
                                      			        window.location='/';
                                      			    };

 			 $scope.continueNext = function(){

                     var basicInfo = JSON.parse(sessionStorage.getItem("basicInfo"));
                     var aboutInfo = $scope.aboutInfo;
                     var profile = Object.assign({},basicInfo, aboutInfo);
                     sessionStorage.removeItem("basicInfo");
                     sessionStorage.setItem("profile", JSON.stringify(profile));
                    window.location='/summary';
 			    };
 			 });