STATIC_URL = 'assets/';
var portfolioApp = angular
    .module('portfoilo', [
        'ngResource'
    ])
    .directive('homeblock', [
        function () {
            return {
                'restrict': 'E',
                'templateUrl': STATIC_URL + 'templates/home.html.tmpl'
            };
        }
    ])
    .directive('aboutblock', [
        function () {
            return {
                'restrict': 'E',
                'templateUrl': STATIC_URL + 'templates/about.html.tmpl'
            };
        }
    ])
    .directive('portfolioblock', [
        function () {
            return {
                'restrict': 'E',
                'templateUrl': STATIC_URL + 'templates/portfolio.html.tmpl'
            };
        }
    ])
    .directive('getintouchblock', [
        function () {
            return {
                'restrict': 'E',
                'templateUrl': STATIC_URL + 'templates/get-in-touch.html.tmpl'
            };
        }
    ])
    .directive('footerblock', [
        function () {
            return {
                'restrict': 'E',
                'templateUrl': STATIC_URL + 'templates/footer.html.tmpl'
            };
        }
    ])
    .factory('instagramResource', ['$resource', function($resource) {
        return $resource('api/instagram', {});
    }])
    .controller('about', ['$scope', 'instagramResource',
        function ($scope, instagramResource) {
            $scope.instagram = {};
            instagramResource.query(function (response) {
                $scope.instagram = response;
            });
        }
    ]);
