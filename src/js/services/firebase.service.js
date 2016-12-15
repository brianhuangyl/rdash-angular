/**
 * Firebase Service
 */

angular
	.module('RDash')
	.service('firebaseService',
		function() {
			this.getUsers = function(callback) {
				return firebase.database().ref('users').on('value', callback);
			}
		}
);
