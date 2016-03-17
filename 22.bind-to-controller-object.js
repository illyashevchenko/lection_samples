class ItemsListCtrl {
  constructor() {
    this.selected = null;
  }


  select(item) {
    this.selected = item;
  }
}


angular.module('bindings', [])
  .directive('itemsList', () => ({
    scope           : {},
    bindToController: {
      list: '=itemsList'
    },

    controller  : ItemsListCtrl,
    controllerAs: 'ctrl',
    templateUrl : './items-list.html'
  }));
