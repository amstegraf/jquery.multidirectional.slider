###**GoGoSlide - jQuery Multidirectional Content Slider Plugin with Adjustable Viewport**
Copyright (c) 2012 Aurelian Apostol | amstegraf
http://www.codbug.com/gogoslide

//Play settings
{
* autoplay: true,
* frames: 1,
* speed: 2000,
* focus: 0,
* stopOnEnd: false,
* type: 'slide', // slide or jump

//Display settings
* width: 193,
* height: 249,
* margin: 0,
* orientation: 'horizontal', //vertical
* anchors: false,

//Controllers
* playButton: false,
* stopButton: false,
* previousButton: false,
* nextButton: false,

//Debug Mode
* debug: false
}

<pre><code>
<div id="name_container">
	<div id="previous_button"><img src="img_src" alt="" title="" /></div>
	<div id="next_button"><img src="img_src" alt="" title="" /></div>
	<div id="controllers">
		<div id="play_button"><img src="img_src" alt="" title="" /></div>
		<div id="stop_button"><img src="img_src" alt="" title="" /></div>
	</div>
	<div id="anchors">
		<a href="#"><img src="" alt="" title="" /></a>
	</div>
	
	<div id="name_container_reel">	
		<div class="clipper">
		</div>
	</div>
</div>
</code></pre>