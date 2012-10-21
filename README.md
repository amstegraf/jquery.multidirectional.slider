###**GoGoSlide - jQuery Multidirectional Content Slider Plugin with Adjustable Viewport, Fast Implementation for GoGo programmers**
Copyright (c) 2012 Aurelian Apostol | amstegraf
http://www.codbug.com/gogoslide

options{
* autoplay: true,
* frames: 1,
* speed: 2000,
* focus: 0,
* stopOnEnd: false,
/**
\* @var type string: {slide, jump}
*/
* type: 'slide',

* width: 193,
* height: 249,
* margin: 0,
/**
\* @var orientation string: {horizontal, vertical}
*/
* orientation: 'horizontal',
* anchors: false,

* previousButton: false,
* nextButton: false,

* debug: false
}

<code>

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
            <div class="clipper">any type of content here</div>
        </div>
    </div>

</code>