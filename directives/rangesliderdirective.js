'use strict';
  var noUiSlider = require('nouislider'),
    moment  = require('moment');
var rangeSlider = function(){
	return{
		restrict: 'A',
           scope: {
               start:'=',
			   end:'='
            },
			
			link: function (scope, elem, attrs) {
		             noUiSlider.create(elem[0],{
					start: [ timestamp(scope.start), timestamp(scope.end)],
					connect:true,
					range:{
						'min':timestamp(moment().add(-60,'days').toDate()),
						'max':timestamp(moment().add(30,'days').toDate())
					},
					 step: 1 * 24 * 60 * 60 * 1000,

				})
				elem[0].noUiSlider.on('slide',function(values,handle){
					console.log(values,handle);
					scope.start=moment(Math.floor(values[0])).format();
					scope.end=moment(Math.floor(values[1])).format();
					scope.$apply();
				})
            }
		
	}
	
	function timestamp(str){
		console.log(str)
		return new Date(str).getTime();
	}
};


module.exports = rangeSlider;