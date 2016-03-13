angular.module('app')
  .directive('itemsList', () => ({
    link($scope) {
      $scope.list = ['1.0', '1.2', '1.3'];
      $scope.selected = null;

      $scope.select = function (item) {
        $scope.selected = item;
      };

      $scope.selectNext = function () {
        let index = $scope.list.indexOf($scope.selected) + 1;
        index     = Math.min($scope.list.length - 1, index);

        $scope.select($scope.list[index]);
      };
    },
    template: `<div ng-repeat = "item in list"
                    ng-click  = "select(item)"></div>`
  }));