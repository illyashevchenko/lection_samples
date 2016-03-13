angular.module('scopeSoupRecipe', [])
  .directive('itemsList', () => ({
    link($scope) {
      $scope.list       = ['1.3', '1.4' , '1.5'];
      $scope.selected   = null;

      $scope.select = function (item) {
        $scope.selected = item;
      };

      $scope.selectNext = function () {
        let index = $scope.list.indexOf($scope.selected) + 1;
        index     = Math.min($scope.list.length - 1, index);

        $scope.select($scope.list[index]);
      };
    },
    template: `<div ng-repeat = "item in list | filter : version"
                    ng-click  = "select(item)">{{ item }}</div>
              <input ng-if    = "!disableFiltering"
                     ng-model = "version" />`
  }));