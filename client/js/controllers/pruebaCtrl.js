app.controller('pruebaCtrl', function ($scope, $http) {
    $scope.mensaje = 'la ruta "/prueba"';

    $scope.peticionGET = function (){
	    $http.get('../server/public/prueba').then(function (data){                                                                                                   
	    	console.log(data);
	    	alert(data.data);
	    });
    };

    $scope.peticionPOST = function () {
		$http({
			method: 'POST', 
			url: '../server/public/prueba'
		}).then(function(data, status, headers, config) {
			console.log(data);
			alert(data.data);
		}).error(function(data, status, headers, config) {
			alert("Ha fallado la petición. Estado HTTP: "+status);
		});
    }

    $scope.peticionGET();
});
