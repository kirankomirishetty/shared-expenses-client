angular.module("addExpensesController", []).

controller("AddExpensesController", function($scope, AddExpensesService, $location, $filter) {

 $scope.purposeOfBill="T-Mobile Bill";
	// editable row start
 $scope.expenses = [
    {id: 1, name: 'awesome user1', amount: 51, responsibleParty: -1, groupName: 'admin'},
    {id: 2, name: 'awesome user2', amount: 9, responsibleParty: 3, groupName: 'vip'},
    {id: 3, name: 'awesome user3', amount: 101, responsibleParty: 2}
  ]; 

  $scope.statuses = [
    {value: 1, text: 'status1'},
    {value: 2, text: 'status2'},
    {value: 3, text: 'status3'},
    {value: 4, text: 'status4'}
  ]; 

  $scope.groups = [
    {partyId:-1, partyEmail:"Everyone"},
    {partyId:3, partyEmail:"kiran@gmail.com"},
    {partyId:2, partyEmail:"naveen@gmail.com"}
  ];
  $scope.loadGroups = function() {

  	return $scope.groups;
    // return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
    //   $scope.groups = data;
    // });
  };

  $scope.showGroup = function(expense) {
    if(expense.responsibleParty && $scope.groups.length) {
      console.log($scope.groups[0].partyId+"  "+expense.responsibleParty);
      var selected = $filter('filter')($scope.groups, {partyId: expense.responsibleParty});
      console.log("selected value "+selected[0].partyEmail);
      return selected.length ? selected[0].partyEmail : 'Not set';
    } else {
      return expense.groupName || 'Not set';
    }
    return "not set";
  };

  $scope.showStatus = function(user) {
    var selected = [];
    // if(user.status) {
    //   selected = $filter('filter')($scope.statuses, {value: user.status});
    // }
    return selected.length ? selected[0].text : 'Not set';
  };

  $scope.checkName = function(data, id) {
    if (id === 2 && data !== 'awesome') {
      return "Username 2 should be `awesome`";
    }
  };

  $scope.saveUser = function(data, id) {
    //$scope.user not updated yet
    // angular.extend(data, {id: id});
    return "Data saved";
  };

  // remove user
  $scope.removeUser = function(index) {
    $scope.expenses.splice(index, 1);
  };

  // add user
  $scope.addUser = function() {
    $scope.inserted = {
      id: $scope.expenses.length+1,
      name: '',
      status: null,
      group: null 
    };
    $scope.expenses.push($scope.inserted);
  };
	// editable row end
});

