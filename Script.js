/// <reference path="angular.min.js" />

// creating a module and registing with contoller

var myApp = angular.module("myModule", [])
                    .controller("myController", function ($scope) {

                        var months = [
                            {name: "Jan", visits: 2300, order:243, conversion: "11%"},
                            {name: "Feb", visits: 2200, order:300, conversion: "11%" },
                            {name: "Mar", visits: 2100, order:600, conversion: "11%"},
                            {name: "Apr", visits: 2150, order:250, conversion: "11%" },
                            {name: "May", visits: 2050, order:290, conversion: "11%"},
                        ]

                        $scope.months = months;
                    });