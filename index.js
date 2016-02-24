(function(){
var angular = require('angular'),
    moment  = require('moment'),
    rangeSlider = require('./directives/rangesliderdirective'),
	sliderController = require('./controllers/sliderController')

angular.module('slider',[]);

angular.module('slider')
.controller('controller',sliderController)
.directive('rangeSlider',rangeSlider);




})();