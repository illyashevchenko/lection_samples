class ItemsListCtrl {
  constructor() {
    this.selected = null;
  }


  select(item) {
    this.selected = item;
  }
}


angular.module('isolatedScope', [])
  .directive('itemsList', () => ({
    scope           : {
      list: '=itemsList'
    },
    bindToController: true,

    controller  : ItemsListCtrl,
    controllerAs: 'ctrl',
    templateUrl : './items-list.html'
  }));
