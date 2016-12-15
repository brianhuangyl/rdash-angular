/**
 * Dashboard Controller
 */

angular
	.module('RDash')
	.controller('DashboardCtrl', ['$scope', DashboardCtrl]);

function DashboardCtrl($scope) {
	userListener = firebase.database().ref('users');
	$scope.currentDate = moment().toLocaleString()
	dateKey = moment().format('YYYY-MM-DD')
	$scope.isLoaded = false;
	userListener.on('value', function(users){
		$scope.isLoaded = true;
		$scope.employees = [];
		users.forEach(function(user){
			userCalendar = user.val().calendar;
			userDetails = user.val().details;
			$scope.employees.push({
				name: userDetails.name,
				id: userDetails.id,
				status: userCalendar[dateKey].status
			});
			$scope.$apply();
		});
	});

	$scope.$on('$destroy', function(){
		userListener.off();
	})

}
