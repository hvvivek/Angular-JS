(function(){
    'use-strict';

    angular.module("LunchCheck", [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.foodList = "";
        $scope.message = "";
        $scope.status = "";
        $scope.checkList = function(){
            var temp = getMessageFromList($scope.foodList);
            $scope.message = temp;
        }

        function getMessageFromList(string){
            var temp = "Please enter data first";
            string.trim();
            if(string === ""){
                $scope.status = "danger";
            }
            else{
                $scope.status = "success"
                var splitString = string.split(',').filter(isEmpty);
                var num = splitString.length;
                temp = num>3? "Too much!":"Enjoy!";
            }
            return temp;
        }

        function isEmpty(string){
            return string.trim().length>0;
        }
    };
})();