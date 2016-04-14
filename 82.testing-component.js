var $scope = {};

$componentController('itemsList', { $scope }, {
  list    : ['1.3', '1.4', '1.5', '2.0'],
  onSelect: jasmine.createSpy('onSelect')
});