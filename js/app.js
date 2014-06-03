var STATIC_URL = 'assets/',
    portfolioApp = angular
        .module('portfoilo', [
            'ngResource'
        ])
        .directive('navblock', [
            function () {
                return {
                    'restrict': 'E',
                    'replace': true,
                    'templateUrl': STATIC_URL + 'templates/nav.html.tmpl'
                };
            }
        ])
        .directive('homeblock', [
            function () {
                return {
                    'restrict': 'E',
                    'replace': true,
                    'templateUrl': STATIC_URL + 'templates/home.html.tmpl'
                };
            }
        ])
        .directive('aboutblock', [
            function () {
                return {
                    'restrict': 'E',
                    'replace': true,
                    'templateUrl': STATIC_URL + 'templates/about.html.tmpl'
                };
            }
        ])
        .directive('portfolioblock', [
            function () {
                return {
                    'restrict': 'E',
                    'replace': true,
                    'templateUrl': STATIC_URL + 'templates/portfolio.html.tmpl'
                };
            }
        ])
        .directive('getintouchblock', [
            function () {
                return {
                    'restrict': 'E',
                    'replace': true,
                    'templateUrl': STATIC_URL + 'templates/get-in-touch.html' +
                        '.tmpl'
                };
            }
        ])
        .directive('footerblock', [
            function () {
                return {
                    'restrict': 'E',
                    'replace': true,
                    'templateUrl': STATIC_URL + 'templates/footer.html.tmpl'
                };
            }
        ])
        .factory('projectResource', ['$resource', function ($resource) {
            return $resource('api/projects', {});
        }])
        .factory('instagramResource', ['$resource', function ($resource) {
            return $resource('api/instagram', {});
        }])
        .controller('about', ['$scope', 'instagramResource',
            function ($scope, instagramResource) {
                $scope.instagram = {};
                instagramResource.query(function (response) {
                    $scope.instagram = response;
                });
            }
        ])
        .controller('portfolio', ['$scope', '$sce', 'projectResource',
            function ($scope, $sce, projectResource) {
                $scope.portfolio = true;
                $scope.project = false;
                $scope.STATIC_URL = STATIC_URL;

                $scope.projects = {};
                projectResource.query(function (response) {
                    $scope.projects = response;
                });

                $scope.showPortfolio = function (pid) {
                    $scope.portfolio = false;
                    $scope.project = true;

                    $scope.showProject = _.findWhere($scope.projects, {
                        id: pid
                    });
                    $scope.projectText = $sce
                            .trustAsHtml($scope.showProject.text);
                };
            }
        ])
        .controller('footer', ['$scope', function ($scope) {
            var date = new Date();
            $scope.year = date.getFullYear();
        }])
        .filter('unsafe', function ($sce) {
            return function (val) {
                return $sce.trustAsHtml(val);
            };
        });
