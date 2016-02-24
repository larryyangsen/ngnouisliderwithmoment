(function(){
var angular = require('angular'),
    moment  = require('moment'),
    rangeSlider = require('./rangesliderdirective');

angular.module('slider',[]);

angular.module('slider')
.controller('controller',controller)
.directive('rangeSlider',rangeSlider);


function controller(){
	var self = this;
	self.start=moment().add(-30,'days').format();
	self.end=moment().add(-20,'days').format();
	
}

})();