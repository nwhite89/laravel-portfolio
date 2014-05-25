<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href='http://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,400,400italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Mr+Dafoe' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{ URL::asset('assets/css/template.css') }}">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.16/angular.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.16/angular-resource.min.js"></script>
    <script src="assets/js/app.min.js"></script>
</head>
<body ng-app="portfoilo">
    <homeblock></homeblock>
    <div ng-controller="about">
        <aboutblock></aboutblock>
    </div>
    <portfolioblock></portfolioblock>
    <getintouchblock></getintouchblock>
    <footerblock></footerblock>
</body>
</html>
