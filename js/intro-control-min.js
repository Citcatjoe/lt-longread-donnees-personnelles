jQuery(document).ready((function(e){e(".glitch").glitch({layers:["#f818f4","#89dd87"],offset:[5,5]}),e(".glitch2").glitch({layers:["#f818f4","#89dd87"],offset:[7,7]}),e(".glitch3").glitch({layers:["#f818f4","#89dd87"],offset:[7,7]}),e(".glitch4").glitch({layers:["#f818f4","#89dd87"],offset:[7,7]}),e(".glitch5").glitch({layers:["#f818f4","#89dd87"],offset:[7,7]}),e(".glitch6").glitch({layers:["#f818f4","#89dd87"],offset:[7,7]}),e(window).width()>1200?$hVideoWrapperTiming="+=5.0":$hVideoWrapperTiming="+=0.1";e("header .video-wrapper");var o=e(".overlay"),t=e(".overlay .logo-lt-blanc, .overlay .logo-sponsor"),a=e(".spinner"),r=e(".header__bg"),l=e("h1"),n=e("h2"),s=e(".scroll-indicator");new TimelineMax({paused:!1}).set([s],{yPercent:"105"}).set([l,n],{autoAlpha:0}).set([r],{scale:1.05}).to([a,t],.7,{autoAlpha:0,ease:Power4.easeOut},"+=1.5").to(o,1.5,{autoAlpha:0,ease:Linear.easeNone},"-=0.0").to(r,10,{scale:1,ease:Power4.easeOut,y:0},"-=1.5").to([l],0,{autoAlpha:1,yPercent:"0",ease:Power4.easeOut},"-=7.0").to(n,0,{autoAlpha:1,ease:Power4.easeOut},"-=6").to(s,1,{yPercent:"2",ease:Power4.easeOut,onComplete:function(){var o=new ScrollMagic.Controller,t=e(".header__content__container__box"),a=(new ScrollMagic.Scene({triggerHook:"onEnter",duration:1e3,offset:0}).setTween(t,{autoAlpha:0,yPercent:"-50%",ease:Power0.easeInOut,clearProps:"all"}).addTo(o),new ScrollMagic.Controller);new ScrollMagic.Scene({triggerHook:"onEnter",duration:500,offset:0}).setTween(s,{yPercent:"105",ease:Power0.easeInOut}).addTo(a)}},"-=4.0")}));