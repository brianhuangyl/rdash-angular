/**
 * Profile Controller
 */

angular
	.module('RDash')
	.controller('ProfileCtrl', ['$scope', '$stateParams', ProfileCtrl]);

function ProfileCtrl($scope, $stateParams) {
	userId = $stateParams.id;
	userListener = firebase.database().ref('users');
	$scope.currentDate = moment().toLocaleString();
	$scope.isLoaded = false;
	userListener.orderByKey().equalTo(userId).on('value', function(user){
		$scope.isLoaded = true;
		userDetails = user.val()[userId];
		$scope.employee = _.extend(userDetails.details,
			{calendar: userDetails.calendar});
		$scope.$apply();
	});

	$scope.$on('$destroy', function(){
		userListener.off();
	})

}
