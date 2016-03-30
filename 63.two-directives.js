class ItemsListCtrl {
  constructor() {
    this.selected = null;
  }

  select(item) {
    this.selected = item;
  }
}

class ItemsListDefaultCtrl {
  $onInit() {
    this.itemCtrl.select(this.list[this.defaultIndex]);
  }
}

angular.module('itemsListComposition', [])
  .directive('itemsList', () => ({
    scope: true,

    bindToController: {
      list: '<itemsList'
    },

    controller  : ItemsListCtrl,
    controllerAs: 'ctrl',
    templateUrl : './items-list.html'
  }))

  .directive('itemsListDefault', () => ({
    scope  : true,
    require: {
      itemCtrl: 'itemsList'
    },

    bindToController: {
      list        : '<itemsList',
      defaultIndex: '@itemsListDefault'
    },

    controller  : ItemsListDefaultCtrl,
    controllerAs: 'defaultCtrl'
  }))


  .controller('Main', function () {
    this.list = ['1.3', '1.4', '1.5', '2.0'];

    this.onVersionChange = function (version, scope, locals) {
      console.log(version, scope, locals)
    }
  });
