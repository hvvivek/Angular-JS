(function(){
    'use-strict';
    angular.module("foodChecker")
    .controller('foodCheckerController', function($scope){
        $scope.foodList = "";
        $scope.message = "";

        $scope.checkList = function(){
            $scope.message = getMessageFromList(string);
        }

        function getMessageFromList(string){
            var temp = string;
            string.trim();
            if(string.equals('')){
                temp = "Please enter a value";
            }
            else{
            var num = string.split(',').length;
        
            if(num>3){
                temp = "Too much!"
            }
            else{
                temp = "Enjoy!";
            } 
            }
            return message;
        }
    })
})();