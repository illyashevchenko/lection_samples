class ItemsListDefaultCtrl {
  constructor() {
    this.select(this.list[0]);
  }


  select(item) {
    this.selected = item;
  }
}


angular.module('bindingsAccess', [])
  .directive('itemsListDefault', () => ({
    scope           : {},
    bindToController: {
      list: '=itemsListDefault'
    },

    controller  : ItemsListDefaultCtrl,
    controllerAs: 'ctrl',
    templateUrl : './items-list-default.html'
  }));
