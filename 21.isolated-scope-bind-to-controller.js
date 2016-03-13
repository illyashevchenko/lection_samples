angular.module('app')
  .directive('itemsList', () => ({
    scope   : {
      list: '=itemsList'
    },
    controller() {
      this.selected = null;

      this.select = (item) =>
        $scope.selected = item;

      this.selectNext = () => {
        let index = $scope.list.indexOf($scope.selected) + 1;
        index     = Math.min($scope.list.length, index);

        $scope.select($scope.list[index]);
      };
    },
    controllerAs: 'ctrl',
    template: `<div ng-repeat = "item in ctrl.list"
                    ng-click  = "ctrl.select(item)"></div>`
  }));