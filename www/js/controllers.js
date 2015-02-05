angular.module("starter.controllers", [])
    .controller("AppCtrl", function($scope) {
        $scope = $scope;
    })
    .controller("stallListCtrl", function ($scope, Stalls) {
        console.log(Stalls.all());
        $scope.stalls = Stalls.all();
    })
    .controller("stallDetailCtrl", function ($scope, $stateParams, Stalls) {
        console.log($stateParams.stallId);
        $scope.stall = Stalls.get($stateParams.stallId);
    })
    .controller('MapCtrl', function ($scope, $ionicLoading) {
        $scope.mapCreated = function (map) {
            $scope.map = map;
        };

        $scope.centerOnMe = function () {
            console.log("Centering");
            if (!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function (pos) {
                console.log('Got pos', pos);
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.loading.hide();
            }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
        };
    });

    

   