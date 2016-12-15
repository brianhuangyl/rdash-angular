/**
 * Dashboard Controller
 */

angular
	.module('RDash')
	.controller('DashboardCtrl', ['$scope', 'firebaseService', DashboardCtrl]);

function DashboardCtrl($scope, firebaseService) {
	dateKey = moment().format('YYYY-MM-DD')
	firebaseService.getUsers(function(users){
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
