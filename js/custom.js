   var app=angular.module('app', []);
  app.controller("default",function($scope){
   $scope.txt="Senserit iis multos, ex quis an lorem. Mandaremus quo sunt mentitum. Ingeniis e lpa. Culpa si et aliqua fabulas in iis dolor pariatur ingeniis, ad esse de veniam senserit ea eram tamen, aut nulla voluptate imitarentur ex amet ingeniis m fore quem. Ingeniis cohaerescant nam nostrud."
  });

app.controller("default2",function($scope){
    $scope.txt2="Quo te minim velit enim, quo voluptate familiaritatem, tamen vidisse reprehenderit, sint aut ad multos aliquip, illum ex non labore vidisse,  mandaremus instituendarum qui mandaremus, offendit quo occaecat quo quibusdam  quis deserunt. Litteris eram proident cupidatat ex ea an sunt velit dolore. Esse         hic commodo quo dolore, de sint exercitation. Aliqua proident exquisitaque, iis    dolore laborum arbitrantur, nam se concursionibus, cupidatat culpa amet proident   ipsum. Sunt ingeniis reprehenderit, est est quis offendit, an et culpa velit   veniam, quem officia sed cillum amet ab ex illum eiusmod graviterque, ut sunt   duis irure possumus, possumus irure an deserunt efflorescere eu doctrina ab esse         tempor. Probant veniam nisi arbitror anim quo o fore sint ne iudicem in arbitror    ut cillum eiusmod, ex ullamco se vidisse te pariatur nulla quem expetendis magna   nam hic iis cillum varias culpa est quis iudicem est enim nisi, labore tempor    nostrud. Offendit ubi quamquam, nescius ea quis aut culpa incididunt  tractavissent, eu anim graviterque si mandaremus amet mandaremus tempor, possumus fugiat duis de multos, e varias dolor sint appellat, enim expetendis  domesticarum."
});
app.controller("name",function($scope){
  $scope.firstname="Asif Ahmed";
  $scope.lastname="ibna ahmed asif";
});
 app.controller("water",function ($scope){
  $scope.water_first="dhak bangladesh hello everyone";
 });
app.controller("uppercases",function($scope){
  $scope.firstupper="asif ahmed";
    $scope.firstlower="ASDD ahmedD";
    
});
app.controller("naming",function($scope,$http){
    $http.get("http://www.w3schools.com//website/Customers_JSON.php").success(function(response){
     $scope.conn=response;
    });
});
app.controller("tabledatabyjson",function($http,$scope){
 $http.get("http://www.w3schools.com/website/Customers_JSON.php").success(function(response){
  $scope.data=response;
 });
});
app.controller("data-hide",function($scope){
  $scope.name1="asif";
    $scope.name2="ahmed";
    $scope.hides=false;
    $scope.toggle=function(){
    $scope.hides=!$scope.hides;
    };
});
app.controller("vegetable",['$scope',function($scope){
 $scope.spice="spice is normal";
    $scope.spice1=function(c){
    $scope.spice="this is very cold spice and If u take it so it will increase your health"+c;
    };
    $scope.spice2=function(){
     $scope.spice="this is not simple spicy.It is very harmful for the health.so please do not take it";
    };
}]);
