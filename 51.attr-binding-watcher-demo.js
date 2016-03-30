angular.module('attributeApp', [])
  .directive('attrBind', () => ({
    scope: {
      value: '@attrBind'
    },
    template: '{{:: value }}'
  }));