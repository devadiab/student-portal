/* Setup general page controller */
angular.module('MetronicApp').controller('StudentController', ['$rootScope', '$scope',' $http', 'settings', function($rootScope, $scope, settings,$http) {
    $http.get('http://localhost/student_portal/student-portal/backend/api/api/student').then(res => {
        $scope.data = res;
    });     
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	App.initAjax();
	    // set default layout mode
    	$rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);
