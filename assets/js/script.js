const toggleAbout = () => {	
	if ($(".work").hasClass("shown")) {
		$(".work-page").slideToggle("slow");
		$(".work").toggleClass("shown");
	}

	$(".about-page").slideToggle("slow");
	
	if (($(".about-page").css("display")=="block") & (screen.width > 960)) {
   
		  $(".about-page").css({"height":"100%","display":"flex", "flex-direction":"row",
        "justify-content":"space-around"});   
  }

  if (($(".about-page").css("display")=="block") & (screen.width < 960) & (screen.width > 400)) {
   
      $(".about-page").css({"height":"100%","display":"flex", "flex-direction":"column",
        "justify-content":"space-around","align-items":"center"});   
  }


	$(".about").toggleClass("shown");	
  
}

const toggleWork = () => {
	if ($(".about").hasClass("shown")) {
		$(".about-page").slideToggle("slow");
		$(".about").toggleClass("shown");
	}

	$(".work-page").slideToggle("slow");

	if ($(".work-page").css("display")=="block") {
		$(".work-page").css({"height":"100%","display":"flex", "flex-direction":"column",
			"justify-content":"space-around","align-items":"center"});
	}
	$(".work").toggleClass("shown");
}


// for sticky
// $(document).ready(function() {
//   var stickyNavTop = $('.top').offset().top;
  
//   var stickyNav = function(){
//       var scrollTop = $(window).scrollTop();
           
//       if (scrollTop >= stickyNavTop) { 
//           $('.top').addClass('sticky');
//       } else {
//           $('.top').removeClass('sticky'); 
//       }
//   };

//   stickyNav();
//   $(window).scroll(function() {
//     stickyNav();
//   });
// });


// $(document).ready(function () {  
//   var top = $('.top').offset().top;
//   $(window).scroll(function (event) {
//     var y = $(this).scrollTop();
//     if (y >= top)
//       $('.top').addClass('sticky');
//     else
//       $('.top').removeClass('sticky');
//     $('.top').width($('.top').parent().width());
//   });
// });


// For scrambler effect
var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    m.codeletters = "01_";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Hello! I am Vim.',
      'I am a full stack web developer.',
      'Cheers!'
    ];
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
}

console.clear();
var messenger = new Messenger($('#display'));

