/**
 * GoGoSlide - jQuery Multidirectional Content Slider Plugin with Adjustable Viewport
 * 
 * Copyright (c) 2012 Aurelian Apostol | amstegraf
 * http://www.codbug.com/gogoslide
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2012
 * Version : 0.2.0
 * Released: February 22, 2012 - 17:24pm
 */
(function($){
	function GoGoSlide(target, options){
		var self = this;
		target = $(target);
	
		$.extend(self, {
			startSliding: function( ){
				if (this.getInst(target)) {
					return FALSE;
				}
				var inst = self.newInstance(target);
				
				self.setClipper();
				self.setReel( options.orientation, options.width, options.height, options.margin );
				
				$.data(target, "gogoslide", inst);
								
				if (options.autoplay) {
					self.playSlider(target);
				}
			},
			
			setClipper: function(){
				target.find(".clipper").css({width:options.width, height:options.height, 'overflow':'hidden', margin:options.margin});				
			},
			
			setReel: function( orientation, width, height, margin ){
				var clipperSum = target.find(".clipper").size();
				switch( orientation ){
					case 'horizontal':
						target.css({width:options.frames*(width+margin*2),'overflow':'hidden'});
						target.children().css({width:clipperSum*(width+margin*2)});
						break;
					case 'vertical':
						target.css({height:options.frames*(height+margin*2), width:options.width+margin*2, 'overflow':'hidden'});
						target.children().css({height:clipperSum*(height+margin*2)});
						break;
				};
			},
			
			playSlider: function( target ){
				var inst = this.getInst(target);
				if (!inst) return;
				
				inst.intervalID = window.setInterval(function () {
					self.animate(target, inst);
					if (options.stopOnEnd && inst.index === 0) {
						self.stopSlider(target);
					}
				}, options.speed+1000);
				$.data(target, "gogoslide", inst);
			},
			
			stopSlider: function (target) {
				var inst = this.getInst(target);
				if (!inst) return;
				window.clearInterval(inst.intervalID);
				$.data(target, "gogoslide", inst);
			},
			
			animate: function (target, inst) {
				var inst = this.getInst(target);
				if(!inst) return;
				
				switch ( options.orientation ){
					case 'horizontal':
						if( options.type === 'jump' ) var speed = 500;
						else var speed = options.speed;
						
						target.children("div").animate({marginLeft: self.nextSlider(target)}, speed, 'swing', function(){});
						break;
					case 'vertical':
						if( options.type === 'jump' ) var speed = 500;
						else var speed = options.speed;
						
						target.children("div").animate({marginTop: self.nextSlider(target)}, speed, 'swing', function(){});
						break;
				};
			},
			
			firstSlider: function (target) {
	        },
	        
	        lastSlider: function (target) {
	        },
			
			prevSlider: function (target) {
				var inst = this.getInst(target);
				if(!inst) return;
				
				switch ( options.orientation ){
					case 'horizontal':
						var previousPosition = target.children("div").css("margin-left").replace(/[^-\d\.]/g, '');
						break;
					case 'vertical':
						var previousPosition = target.children("div").css("margin-top").replace(/[^-\d\.]/g, '');
						break;
				};
				
				return previousPosition;
			},
			
			nextSlider: function (target) {
				var inst = this.getInst(target);
				if(!inst) return;
				
				switch ( options.orientation ){
					case 'horizontal':
						var nextPosition = self.prevSlider(target)-target.css("width").replace(/[^-\d\.]/g, '');
						break;
					case 'vertical':
						var nextPosition = self.prevSlider(target)-target.css("height").replace(/[^-\d\.]/g, '');
						break;
				};			
				
				return nextPosition;
				
			},
			
			newInstance: function(target) {
				var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1');
				return {
					id: id, 
					container: target,
					uid: Math.floor(Math.random() * 99999999),
					index: 0,
					intervalID: null
				}; 
			},

			getInst: function(target) {
				try {
					return $.data(target, "gogoslide");
				}
				catch (err) {
					throw 'Missing instance data for this slider';
				}
			},
			
			get: function(inst, name) {
				return inst.options[name] !== undefined ? inst.options[name] : this.defaults[name];
			}
		});
		
	};
	
	$.fn.gogoslide = function( options ){
		var _defaults = $.extend({
			//Play settings
			autoplay: true,
			frames: 1,
			speed: 2000,
			focus: 0,
			stopOnEnd: false,
			type: 'slide', //jump
			onStart: null,
			onEnd: null,
			onFirst: null,
			onLast: null,
			
			//Display settings
			width: 193,
			height: 249,
			margin: 0,
			orientation: 'horizontal', //vertical
			anchors: false,
			
			//Debug Mode
			debug: false
		}, options);
		
		return this.each(function(){
			$.gogoslide = new GoGoSlide(this, _defaults);
			$.gogoslide.startSliding();
		});
	};
	
})(jQuery);