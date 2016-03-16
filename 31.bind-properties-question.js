class ItemsListCtrl {
  constructor() {
    this.select(this.list[0]);
  }


  select(item) {
    this.selected = item;
  }
}


angular.module('isolatedScope', [])
  .directive('itemsList', () => ({
    scope           : {},
    bindToController: {
      list: '=itemsList'
    },

    controller  : 'ItemsListCtrl',
    controllerAs: 'ctrl',
    templateUrl : './items-list-default.html'
  }))
  .controller('ItemsListCtrl', ItemsListCtrl);
