function ItemsListDefaultCtrl($controller, ItemsListCtrlFactory, $scope) {

  function ItemsListDefaultCtrl() {
    ItemsListCtrlFactory.apply(this, arguments);
  }

  var _super = ItemsListCtrlFactory.prototype;

  ItemsListDefaultCtrl.prototype = Object.create(_super);

  ItemsListDefaultCtrl.prototype.$onInit = function () {
    this.select(this.list[0]);
  };

  var instance = $controller(ItemsListDefaultCtrl, {
    $scope: $scope
  });

  angular.extend(instance, this);
  instance.$onInit();

  return instance;
}


angular.module('es5Inheritance', [])
  .directive('itemsListDefault', () => ({
    scope           : {
      list: '=itemsListDefault'
    },
    bindToController: true,

    controller  : ItemsListDefaultCtrl,
    controllerAs: 'ctrl',

    template: `<div ng-repeat = "item in ctrl.list | filter : ctrl.version"
                    ng-click  = "ctrl.select(item)">{{ item }}</div>
               <div ng-bind   = "ctrl.selected"></div>
               <input ng-model = "ctrl.version" />`
  }));
