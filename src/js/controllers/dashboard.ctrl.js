/**
 * Dashboard Controller
 */

angular
	.module('RDash')
	.controller('DashboardCtrl', ['$scope', 'firebaseService', DashboardCtrl]);

function DashboardCtrl($scope, firebaseService) {
	$scope.currentDate = moment().toLocaleString()
	dateKey = moment().format('YYYY-MM-DD')
	$scope.isLoaded = false;
	firebaseService.getUsers(function(users){
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
		console.log($scope.employees);
	});

}
