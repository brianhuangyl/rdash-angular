/**
 * Dashboard Controller
 */

angular
	.module('RDash')
	.controller('DashboardCtrl', ['$scope', DashboardCtrl]);

function DashboardCtrl($scope) {
	$scope.employees = [{
		id: '1',
		name: 'Reena',
		status: 'office'
	 },
	 {
	 	id: '2',
		name: 'Atul',
		status: 'leave'
	 },
	 {
	 	id: '3',
		name: 'Priyank',
		status: 'work from Home'
	 }
	];
}
