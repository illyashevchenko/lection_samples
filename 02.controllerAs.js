angular.module('controllerAsRecipe', [])
  .directive('itemsList', () => ({
    controller() {
      this.list     = ['1.3', '1.4', '1.5'];
      this.selected = null;

      this.select = function (item) {
        this.selected = item;
      };

      this.selectNext = function () {
        let index = this.list.indexOf(this.selected) + 1;
        index     = Math.min(this.list.length - 1, index);

        this.select(this.list[index]);
      };
    },
    controllerAs: 'ctrl',

    template: `<div ng-repeat = "item in ctrl.list | filter : ctrl.version"
                    ng-click  = "ctrl.select(item)">{{ item }}</div>
               <input ng-model = "ctrl.version" />`
  }));