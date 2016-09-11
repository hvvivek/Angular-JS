(function(){
    'use-strict';

    angular.module("LunchCheck", [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.foodList = "";
        $scope.message = "";
        $scope.status = "";
        $scope.nullMessage = "";
        $scope.checkList = function(){
            var temp = getMessageFromList($scope.foodList);
            $scope.message = temp;
        }

        function getMessageFromList(string){
            var temp = "Please enter data first";
            $scope.nullMessage = "";
            var splitString = string.split(',').filter(isEmpty);
            var num = splitString.length;
            var max = string.split(',').length;
            if(num<max){
                $scope.nullMessage = "Input does NOT consider and empty item, i.e., , , as an item towards to the count";
            }
            if(num < 1){
                $scope.status = "danger";
            }
            else{
                $scope.status = "success"
                temp = num>3? "Too much!":"Enjoy!";
            }
            return temp;
        }

        function isEmpty(string){
            return string.trim().length>0;
        }
    };
})();