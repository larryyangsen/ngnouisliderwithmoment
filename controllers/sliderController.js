'use strict';
var moment  = require('moment');
	 
var sliderController = function(){
	var self = this;
	self.start=moment().add(-30,'days').format();
	self.end=moment().add(-20,'days').format();
	
};

module.exports =sliderController;
