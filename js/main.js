jQuery(document).ready(function($)
{

    $( ".glitch-img" ).mgGlitch({
          // set 'true' to stop the plugin
                  destroy : false,
          // set 'false' to stop glitching
          glitch: true,
          // set 'false' to stop scaling
          scale: true,
          // set 'false' to stop glitch blending
          blend : true,
          // select blend mode type
          blendModeType : 'hue',
          // set min time for glitch 1 elem
          glitch1TimeMin : 200,
          // set max time for glitch 1 elem
          glitch1TimeMax : 400,
          // set min time for glitch 2 elem
          glitch2TimeMin : 10,
          // set max time for glitch 2 elem
          glitch2TimeMax : 100,
        });

	var firstPlayDone = false;

	var controllerCell = new ScrollMagic.Controller(),
		controllerHand = new ScrollMagic.Controller(),
		controllerPrice = new ScrollMagic.Controller(),
		$svg2 = $('.svg2'),
		$txt1 = $svg2.find('#txt1'),
		$txt2 = $svg2.find('#txt2'),
		$txt3 = $svg2.find('#txt3'),
		$txt4 = $svg2.find('#txt4'),
		$pill1 = $svg2.find('#pill1'),
		$pill2 = $svg2.find('#pill2'),
		$pill3 = $svg2.find('#pill3'),
		$pill4 = $svg2.find('#pill4'),
		$bad1 = $svg2.find('#bad1'),
		$bad2 = $svg2.find('#bad2'),
		$bad3 = $svg2.find('#bad3'),
		$target = $svg2.find('#target'),
		$shield = $svg2.find('#shield'),
		$exit = $svg2.find('#exit'),
		$cells = $svg2.find('#cells');

	tlSvg2Case1 =  new TimelineMax({ paused: true, repeat: 0 });
	tlSvg2Case2 =  new TimelineMax({ paused: true, repeat: 0 });
	tlSvg2Case3 =  new TimelineMax({ paused: true, repeat: 0 });
	tlSvg2Case4 =  new TimelineMax({ paused: true, repeat: 0 });
	tlFadeRest =  new TimelineMax({ paused: true, repeat: 0 });

	clearSvg2();
	function clearSvg2(){
		clearSvg2Tl =  new TimelineMax();
		clearSvg2Tl
			.set([$txt1, $txt2, $txt3, $txt4], {autoAlpha: 0})
			//.set([$pill1, $pill2], {clearProps:"all"})

			.set($pill1, {scale: .8, autoAlpha: 0, x: '-350px', y: '-350px', rotation: 0, transformOrigin: 'center center'})
			.set($pill2, {scale: .8, autoAlpha: 0, x: '-350px', y: '-350px', rotation: 0, transformOrigin: 'center center'})
			.set($pill3, {scale: .8, autoAlpha: 0, x: '-350px', y: '-350px', rotation: 0, transformOrigin: 'center center'})
			.set($pill4, {scale: .8, autoAlpha: 0, x: '-350px', y: '-350px', rotation: 0, transformOrigin: 'center center'})
			.set($bad1, {autoAlpha: 1, scale: .0, transformOrigin: 'center center'})
			.set($bad2, {autoAlpha: 1, scale: .0, transformOrigin: 'center center'})
			.set($bad3, {autoAlpha: 1, scale: .0, transformOrigin: 'center center'})
			.set($target, {autoAlpha: 0})
			.set($shield, {autoAlpha: 0, x: '-117', y: '-66'})
			.set($exit, {autoAlpha: 0, transformOrigin: '70% 70%', scale: 0})
			.set($cells, {autoAlpha: .35, xPercent: '-9', yPercent: '-5'});
		return clearSvg2Tl;
    }

    tlSvg2Case1
    	.to($txt1, .35, { autoAlpha: 1, ease: Power4.easeOut, onComplete: completeFirstPlay })
    	.to($pill1, .500, { delay: .500, autoAlpha: 1, ease: Power4.easeOut })
    	.to($pill1, 1, { x: '0', y: '0', ease: Power4.easeOut })
    	.staggerTo([$bad1, $bad2, $bad3], .5, { scale: 1, ease: Power4.easeOut }, 0.2)
    	.to($pill1, .1, { delay: .500, autoAlpha: .5, ease: "power4.inOut" })
    	.to($pill1, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill1, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($pill1, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill1, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($pill1, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill1, .1, { autoAlpha: 0, ease: "power4.inOut" })
    	.to($pill1, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill1, .5, { autoAlpha: 0, ease: "power4.inOut" });

    tlSvg2Case2
    	.to($txt2, 0.35, { autoAlpha: 1, ease: Power4.easeOut, onComplete: completeFirstPlay })
    	.to($pill2, .500, { delay: .500, autoAlpha: 1, ease: Power4.easeOut })
    	.to($pill2, 1, { x: '0', y: '0', ease: Power4.easeOut })
    	.to($exit, .500, { delay: 0.5, autoAlpha: 1, scale: 1, ease: Bounce.easeOut})
    	.to($pill2, 1, { rotate: 1, xPercent: '-1', rotation: 90, ease: Power4.easeOut })
    	.to($pill2, 1, { x: '-250', y: '-245', ease: Power4.easeOut })
    	.to($pill2, 1, { x: '-800', y: '-800', rotation: 4970, ease: Power4.easeOut });
    	// .staggerTo([$bad1, $bad2, $bad3], .5, { scale: 0, ease: Power4.easeOut }, 0.2);

    tlSvg2Case3
    	.to($txt3, .35, { autoAlpha: 1, ease: Power4.easeOut, onComplete: completeFirstPlay })
    	.to($pill3, 1, { delay: .500, autoAlpha: 1, ease: Power4.easeOut })
    	.to($shield, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($shield, .1, { autoAlpha: 0, ease: "power4.inOut" })
    	.to($shield, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($shield, .1, { autoAlpha: 0, ease: "power4.inOut" })
    	.to($shield, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($shield, .1, { autoAlpha: 0, ease: "power4.inOut" })
    	.to($shield, .3, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill3, .35, { x: '-200', y: '-200', ease: "power4.in" })
    	.to($pill3, 2, { x: '-800', y: '-200', rotation: 900, ease: Power4.easeOut });

    tlSvg2Case4
    	.to($txt4, .35, { autoAlpha: 1, ease: Power4.easeOut, onComplete: completeFirstPlay })
    	.to($pill4, 1, { delay: .500, autoAlpha: 1, ease: Power4.easeOut })
    	.to($target, 1, { autoAlpha: 1, ease: Power4.easeOut })
    	.to($target, .25, { x: '+270', y: '-180', ease: Power4.easeOut })
    	.to($target, .25, { x: '+50', y: '-180', ease: Power4.easeOut })
    	.to($target, .25, { x: '+110', y: '-50', ease: Power4.easeOut })
    	.to($target, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($target, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($target, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($target, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($target, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($target, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($target, 1, { autoAlpha: 0, ease: "power4.inOut" })
    	.to($pill4, 1, { x: '0', y: '0', ease: Power4.easeOut })
    	.to($pill4, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($pill4, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill4, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($pill4, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill4, .1, { autoAlpha: .5, ease: "power4.inOut" })
    	.to($pill4, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill4, .1, { autoAlpha: 0, ease: "power4.inOut" })
    	.to($pill4, .1, { autoAlpha: 1, ease: "power4.inOut" })
    	.to($pill4, .5, { autoAlpha: 0, ease: "power4.inOut" });;

    function completeFirstPlay()
    {
    	firstPlayDone = true
    }

    $('.anim4').click(function(){
    	// tlSvg2Case1.invalidate().pause();
    	$('#svg2 .menu li').removeClass('is-selected');
    	$(this).addClass('is-selected');
    	tlSvg2Case1.pause();
    	tlSvg2Case2.pause();
    	tlSvg2Case3.pause();
    	tlSvg2Case4.pause();
		clearSvg2();
		 setTimeout(function(){
		 	tlSvg2Case4.restart();
		 }, 50);
	});
    $('.anim3').click(function(){
    	// tlSvg2Case1.invalidate().pause();
    	$('#svg2 .menu li').removeClass('is-selected');
    	$(this).addClass('is-selected');
    	tlSvg2Case1.pause();
    	tlSvg2Case2.pause();
    	tlSvg2Case3.pause();
    	tlSvg2Case4.pause();
		clearSvg2();
		 setTimeout(function(){
		 	tlSvg2Case3.restart();
		 }, 50);
	});
    $('.anim2').click(function(){
    	// tlSvg2Case1.invalidate().pause();
    	$('#svg2 .menu li').removeClass('is-selected');
    	$(this).addClass('is-selected');
    	tlSvg2Case1.pause();
    	tlSvg2Case2.pause();
    	tlSvg2Case3.pause();
    	tlSvg2Case4.pause();
		clearSvg2();
		 setTimeout(function(){
		 	tlSvg2Case2.restart();
		 }, 50);
	});
	$('.anim1').click(function(){
		$('#svg2 .menu li').removeClass('is-selected');
    	$(this).addClass('is-selected');
		tlSvg2Case1.pause();
    	tlSvg2Case2.pause();
    	tlSvg2Case3.pause();
    	tlSvg2Case4.pause();
		clearSvg2();
		 setTimeout(function(){
		 	tlSvg2Case1.restart();
		 }, 50);
	});

    new ScrollMagic.Scene({
	    triggerElement: "#svg2 .menu",
	    triggerHook: 0.8,
	    duration: 1
	})
    .offset(0)
    .on('enter', function () {

    	//alert(firstPlayDone);
    	//console.log(firstPlayDone);


    	if(firstPlayDone === false)
    	{
    		completeFirstPlay();
    		tlSvg2Case1.play();
    		//completeFirstPlay();
    	}
    })
    //.addIndicators()
    .addTo(controllerCell);



    var $svg3 = $('.svg3'),
		$price1 = $svg3.find('#price1'),
		$price2 = $svg3.find('#price2'),
		$price3 = $svg3.find('#price3'),
		$truck = $svg3.find('#truck'),
		$truckPill = $truck.find('#truck-pill'),
		$truckManifier = $truck.find('#truck-manifier'),
		$plane = $svg3.find('#plane'),
		$planePill = $plane.find('#plane-pill'),
		$planeManifier = $plane.find('#plane-manifier'),
		$clouds = $svg3.find('#clouds'),
		$pharma = $svg3.find('#pharma'),
		$stock = $svg3.find('#stock')
		$india = $svg3.find('#india');;

    tlSvg3 =  new TimelineMax({ paused: true, repeat: 0 });

    clearSvg3();
	function clearSvg3(){
		clearSvg3Tl =  new TimelineMax();
		clearSvg3Tl
			.set([$price1, $price2, $price3], {autoAlpha: 0})
			.set($plane, {autoAlpha: 0, x: '-20'})
			.set($planeManifier, {autoAlpha: 0, x: '+20'})
			.set($planePill, {transformOrigin: 'center center', scale: 0})
			.set($truckManifier, {autoAlpha: 0, y: '+20'})
			.set($truckPill, {transformOrigin: 'center center', scale: 0})
			.set($truck, {autoAlpha: 0, x: '-20'})
			.set([$india, $stock, $pharma], {autoAlpha: .0});
		return clearSvg3Tl;
    }

    tlSvg3
    	.to($india, .500, { autoAlpha: 1, ease: Power4.easeOut })
    	.staggerTo([$stock, $pharma], .500, { autoAlpha: .4, ease: Power4.easeOut }, 0.2, '-=0.3')
    	.to($price1, .500, { delay: .5, autoAlpha: 1, ease: Power4.easeOut })
    	.to($plane, .500, { delay: .5, autoAlpha: 1, x: '0', ease: Power4.easeOut })
    	.to($planeManifier, .500, { delay: .5, autoAlpha: 1, x: '0', ease: Power4.easeOut })
    	.to($planePill, .500, { scale: 1, ease: Bounce.easeOut })
    	.to($plane, 2, { delay: .5, x: '+1200', ease: 'Power1.out' })
    	.to($stock, .500, { autoAlpha: 1, ease: Power4.easeOut }, '-=2')
    	.to($planePill, .500, { delay: .5, autoAlpha: 0,  y: '+100', ease: Power1.Out })
    	.to($price2, .500, {autoAlpha: 1, ease: Power4.easeOut })
    	.to($plane, .500, {autoAlpha: 0, ease: Power4.easeOut })
    	.to($truck, .500, { delay: .5, autoAlpha: 1, ease: Power4.easeOut })
    	.to($truckManifier, .500, { delay: .5, autoAlpha: 1, y: '0', ease: Power4.easeOut })
    	.to($truckPill, .500, { scale: 1, ease: Bounce.easeOut })
    	.to($truck, 2, { delay: .5, x: '+900', ease: 'Power1.out' })
    	.to($pharma, .500, { autoAlpha: 1, ease: Power4.easeOut }, '-=2')
    	.to($truckPill, .500, { delay: .5, autoAlpha: 0, x: '-200', y: '+100', ease: Power1.Out })
    	.to($price3, .500, {autoAlpha: 1, ease: Power4.easeOut })
    	.to($truck, .500, {autoAlpha: 0, ease: Power4.easeOut });



    new ScrollMagic.Scene({
	    triggerElement: "#svg3",
	    triggerHook: 0.4,
	    duration: 1
	})
    .offset(0)
    .on('enter', function () {
    	tlSvg3.play();
    })
    //.addIndicators()
    .addTo(controllerPrice);


    var $svg1 = $('.svg1'),
    // $number201 = $svg1.find('#number201'),
    // $number8 = $svg1.find('#number8'),
    // $number6 = $svg1.find('#number6'),
    $badStep1 = $svg1.find('#bad-step-1'),
    $badStep2 = $svg1.find('#bad-step-2'),
    $badStep3 = $svg1.find('#bad-step-3'),
    $badStep4 = $svg1.find('#bad-step-4'),
    $pnspTitle = $svg1.find('#pnsp-title'),
    $pnspNumbers2016 = $svg1.find('#pnsp-numbers-2016'),
    $pnspNumbers2018 = $svg1.find('#pnsp-numbers-2018'),
    $pnspDiff = $svg1.find('#pnsp-diff'),
    $vreTitle = $svg1.find('#vre-title'),
    $vreNumbers2016 = $svg1.find('#vre-numbers-2016'),
    $vreNumbers2018 = $svg1.find('#vre-numbers-2018'),
    $vreDiff = $svg1.find('#vre-diff'),
    $fqrTitle = $svg1.find('#fqr-title'),
    $fqrNumbers2016 = $svg1.find('#fqr-numbers-2016'),
    $fqrNumbers2018 = $svg1.find('#fqr-numbers-2018'),
    $fqrDiff = $svg1.find('#fqr-diff'),
    $mrsaTitle = $svg1.find('#mrsa-title'),
    $mrsaNumbers2016 = $svg1.find('#mrsa-numbers-2016'),
    $mrsaNumbers2018 = $svg1.find('#mrsa-numbers-2018'),
    $mrsaDiff = $svg1.find('#mrsa-diff'),
    $escrTitle = $svg1.find('#escr-title'),
    $escrNumbers2016 = $svg1.find('#escr-numbers-2016'),
    $escrNumbers2018 = $svg1.find('#escr-numbers-2018'),
    $escrDiff = $svg1.find('#escr-diff');

    tlSvg1 =  new TimelineMax({ paused: true, repeat: 0 });

    clearSvg1();
	function clearSvg1(){
		clearSvg1Tl =  new TimelineMax();
		clearSvg1Tl
			.set([$badStep2, $badStep3, $badStep4, $vreTitle, $vreNumbers2016, $vreNumbers2018, $vreDiff, $pnspTitle, $pnspNumbers2016, $pnspNumbers2018, $pnspDiff, $fqrTitle, $fqrNumbers2016, $fqrNumbers2018, $fqrDiff,$mrsaTitle, $mrsaNumbers2016, $mrsaNumbers2018, $mrsaDiff, $escrTitle, $escrNumbers2016, $escrNumbers2018, $escrDiff], {autoAlpha: 0, transformOrigin: 'center center'})
			.set([$badStep4, $badStep2, $badStep3], {transformOrigin: 'center center', scale: .9})
			.set([$vreNumbers2018, $escrNumbers2018, $mrsaNumbers2018, $fqrNumbers2018, $pnspNumbers2018], {transformOrigin: 'center center', scale: .9});
			//.set([$pill1, $pill2], {clearProps:"all"})

			// .set($pill1, {scale: .8, autoAlpha: 0, xPercent: '-25', yPercent: '-30',rotation: 0, transformOrigin: 'center center'})
			// .set($pill2, {scale: .8, autoAlpha: 0, xPercent: '-25', yPercent: '-30',rotation: 0, transformOrigin: 'center center'})
			// .set($pill3, {scale: .8, autoAlpha: 0, xPercent: '-25', yPercent: '-30',rotation: 0, transformOrigin: 'center center'})
			// .set($pill4, {scale: .8, autoAlpha: 0, xPercent: '-25', yPercent: '-30',rotation: 0, transformOrigin: 'center center'})
			// .set($bad1, {autoAlpha: 1, scale: .0, transformOrigin: 'center center'})
			// .set($bad2, {autoAlpha: 1, scale: .0, transformOrigin: 'center center'})
			// .set($bad3, {autoAlpha: 1, scale: .0, transformOrigin: 'center center'})
			// .set($target, {autoAlpha: 0})
			// .set($shield, {autoAlpha: 0, xPercent: '-8.7', yPercent: '-6.85'})
			// .set($exit, {autoAlpha: 0})
			// .set($cells, {autoAlpha: .35, xPercent: '-9', yPercent: '-5'});
		return clearSvg1Tl;
    }

    new ScrollMagic.Scene({
	    triggerElement: "#svg1",
	    triggerHook: 0.3,
	    duration: 1
	})
    .offset(0)
    .on('enter', function () {
    	tlSvg1.play();
    })
    //.addIndicators()
    .addTo(controllerHand);

    tlSvg1
    	//.to($india, .500, { autoAlpha: 1, ease: Power4.easeOut })
    	.staggerTo([$fqrTitle, $fqrNumbers2016, $mrsaTitle, $mrsaNumbers2016, $escrTitle, $escrNumbers2016, $vreTitle, $vreNumbers2016, $pnspTitle, $pnspNumbers2016], .500, { autoAlpha: 1, ease: Power4.easeOut }, 0.05)
    	.staggerTo([$badStep2, $badStep3, $badStep4], 1, { delay: 1, autoAlpha: 1, scale: 1, ease: Power4.easeOut }, 1)
    	.staggerTo([$fqrNumbers2016, $mrsaNumbers2016, $escrNumbers2016, $vreNumbers2016, $pnspNumbers2016], 1, { delay: .500, autoAlpha: 0, scale: .9, ease: Power4.easeOut }, 0.05)
    	.staggerTo([$fqrNumbers2018, $mrsaNumbers2018, $escrNumbers2018, $vreNumbers2018, $pnspNumbers2018], 1, { delay: .500, autoAlpha: 1, scale: 1, ease: Power4.easeOut }, 0.05)
    	.to([$vreDiff, $escrDiff, $mrsaDiff, $fqrDiff, $pnspDiff], 1, { delay: 1, autoAlpha: 1, ease: Power4.easeOut });








	//360
	$('.video-360-poster').click(function(ev){
		 players['video360'].playVideo();
		 $(this).hide();
	});

	window.sr = ScrollReveal();
	sr.reveal('.cbp_tmlabel');


//ytp-thumbnail-overlay-image

	// setTimeout(function()
	// {
	// 	$('footer').nextAll('div').css('display', 'none');
	// }, 5000);

	$(".owl").owlCarousel({
	    items : 1,
	    itemsDesktop: [1200,1],
	    itemsTablet: [992,1],
	    itemsMobile: [500,1],
	    lazyLoad : true,
	    navigation : true
	 });

	// LAZYLOADING DES IMAGES AVEC LA CLASSE "LAZY"
	$("img.lazy").lazyload({
	    effect : "fadeIn"
	});

	// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
	if ($(window).width() > 1200 )
	{
		$(".zoom").click(function()
		{
			zoom.to({
				element: $(this)[0]
			});
		});
	}

	// SCROLL WHEN CLICK ON SCROLL INDICATOR
	$(".scroll-indicator").click(function(){
		$('html, body').animate({
		   scrollTop:$('section:eq(0)').offset().top -80
		}, 1000);
	});


	var $numbers = $('.numbers'),
		numbersDone = false;


	$(window).scroll(function(){
    	if ( $numbers.is(':in-viewport') && numbersDone ==false) {
		  	$('.numbers h1 i').counterUp({
				delay: 10, // the delay time in ms
				time: 3000 // the speed time in ms
			});
			numbersDone = true;
		}

	});




	// CHART CONFIG
	Chart.defaults.groupableBar = Chart.helpers.clone(Chart.defaults.bar);

	var helpers = Chart.helpers;
	Chart.controllers.groupableBar = Chart.controllers.bar.extend({
	  calculateBarX: function (index, datasetIndex) {
	    // position the bars based on the stack index
	    var stackIndex = this.getMeta().stackIndex;
	    return Chart.controllers.bar.prototype.calculateBarX.apply(this, [index, stackIndex]);
	  },

	  hideOtherStacks: function (datasetIndex) {
	    var meta = this.getMeta();
	    var stackIndex = meta.stackIndex;

	    this.hiddens = [];
	    for (var i = 0; i < datasetIndex; i++) {
	      var dsMeta = this.chart.getDatasetMeta(i);
	      if (dsMeta.stackIndex !== stackIndex) {
	        this.hiddens.push(dsMeta.hidden);
	        dsMeta.hidden = true;
	      }
	    }
	  },

	  unhideOtherStacks: function (datasetIndex) {
	    var meta = this.getMeta();
	    var stackIndex = meta.stackIndex;

	    for (var i = 0; i < datasetIndex; i++) {
	      var dsMeta = this.chart.getDatasetMeta(i);
	      if (dsMeta.stackIndex !== stackIndex) {
	        dsMeta.hidden = this.hiddens.unshift();
	      }
	    }
	  },

	  calculateBarY: function (index, datasetIndex) {
	    this.hideOtherStacks(datasetIndex);
	    var barY = Chart.controllers.bar.prototype.calculateBarY.apply(this, [index, datasetIndex]);
	    this.unhideOtherStacks(datasetIndex);
	    return barY;
	  },

	  calculateBarBase: function (datasetIndex, index) {
	    this.hideOtherStacks(datasetIndex);
	    var barBase = Chart.controllers.bar.prototype.calculateBarBase.apply(this, [datasetIndex, index]);
	    this.unhideOtherStacks(datasetIndex);
	    return barBase;
	  },

	  getBarCount: function () {
	    var stacks = [];

	    // put the stack index in the dataset meta
	    Chart.helpers.each(this.chart.data.datasets, function (dataset, datasetIndex) {
	      var meta = this.chart.getDatasetMeta(datasetIndex);
	      if (meta.bar && this.chart.isDatasetVisible(datasetIndex)) {
	        var stackIndex = stacks.indexOf(dataset.stack);
	        if (stackIndex === -1) {
	          stackIndex = stacks.length;
	          stacks.push(dataset.stack);
	        }
	        meta.stackIndex = stackIndex;
	      }
	    }, this);

	    this.getMeta().stacks = stacks;
	    return stacks.length;
	  },
	});

	var data = {
	  labels: ["2011", "2012", "2013", "2014", "2015"],
	  datasets: [
	    {
	      label: "AQ (Analog Quartz)",
	      backgroundColor: "rgba(99,132,255,0.2)",
	      data: [38.2, 39.7, 39.6, 40.4, 40.1],
	      stack: 1
	    },
	    {
	      label: "DQ (Digital Quartz)",
	      backgroundColor: "rgba(99,255,132,0.2)",
	      data: [17.0, 17.6, 17.9, 17.7, 17.6],
	      stack: 1
	    },
	    {
	      label: "ME (Mechanical Watch)",
	      backgroundColor: "rgba(255,99,132,0.2)",
	      data: [2.7, 2.6, 2.3, 2.2, 1.8],
	      stack: 1
	    }
	  ]
	};

	var data2 = {
	  labels: ["2011", "2012", "2013", "2014", "2015"],
	  datasets: [
	    {
	      label: "AQ (Analog Quartz)",
	      backgroundColor: "rgba(99,132,255,0.2)",
	      data: [75.2, 77.9, 93.6, 107.1, 122.4],
	      stack: 1
	    },
	    {
	      label: "DQ (Digital Quartz)",
	      backgroundColor: "rgba(99,255,132,0.2)",
	      data: [14.3, 15.6, 18.2, 20.1, 21.0],
	      stack: 1
	    },
	    {
	      label: "ME (Mechanical Watch)",
	      backgroundColor: "rgba(255,99,132,0.2)",
	      data: [11.5, 12.3, 13.0, 14.1, 13.9],
	      stack: 1
	    }
	  ]
	};

	var graphGenerated = false;
	$(window).scroll(function(){
    	if ($('.gallery .trigger').is(':in-viewport') && graphGenerated == false) {

    		// SET A DELAY IN A FUNCTION
			setTimeout(function()
			{
				setTimeout(function()
				{
					$('canvas').addClass('is-visible');
				}, 100);

				var ctx = document.getElementById("myChart").getContext("2d");
				new Chart(ctx, {
				  type: 'groupableBar',
				  data: data,
				  options: {
				  	title: {
			            display: true,
			            text: 'UNITÉS (en millions de pièces)'
			        },
				    scales: {
				      yAxes: [{
				        ticks: {
				          max: 70,
				        },
				        stacked: true,
				      }]
				    }
				  }
				});

				var ctx2 = document.getElementById("myChart2").getContext("2d");
				new Chart(ctx2, {
				  type: 'groupableBar',
				  data: data2,
				  options: {
				  	title: {
			            display: true,
			            text: 'VALEUR (en milliard de Yens)'
			        },
				    scales: {
				      yAxes: [{
				        ticks: {
				          max: 160,
				        },
				        stacked: true,
				      }]
				    }
				  }
				});
			}, 500);

			graphGenerated = true;
		}
	});


  /*
    Ajout: «Revenir au récit» apparait sous le making-of si on clique sur l’ancre conduisant au making-of
  */
  $('#makingof-anchor').click(function(){
    $('#makingof-scrolltop').show();
  });
  $('#makingof-scrolltop').click(function(){
    $(this).hide();
  });

  /*
    Ajout optionnel: montrer les cookies
  */
  // var cookie_display = ' ';
  // document.cookie.split(';').forEach(function(item) {
  //     cookie_display += item.replace('=', ' = ') + '\n'; 
  // });
  // $('#cookie-container').text(cookie_display);

  /*
    Ajout optionnel: temps passé + pixels scrollés
  */
  var startDate = (new Date).getTime();
  var scrollCount = 0;
  var scrollContainer = $('#scroll-container');

  $(window).scroll(function(e){
    scrollCount++;
    scrollContainer.html('Vous avez fait défiler cette page ' + scrollCount + ' fois depuis son ouverture.<br>(Il y a de cela) ' + Math.round(e.timeStamp/1000) + ' secondes.')
  });

});
