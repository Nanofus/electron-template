electronTemplate.controller('MainController', function ($scope) {
    var remote = require('remote');

    $scope.closeWindow = function () {
        remote.getCurrentWindow().close();
    }

    $scope.minimizeWindow = function () {
        remote.getCurrentWindow().minimize();
    }

    $scope.maximizeWindow = function () {
        if (!remote.getCurrentWindow().isMaximized()) {
            remote.getCurrentWindow().maximize();
        } else {
            remote.getCurrentWindow().unmaximize();
        }
    }
});