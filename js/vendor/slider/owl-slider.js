// JavaScript Document

$(document).on('ready', function() {
	  var owl = $("#owl-demo");
	 
	  owl.owlCarousel({
		  autoPlay: 4000,
		  items : 4, //10 items above 1000px browser width
		  itemsDesktop : [1920,4], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,3], // betweem 900px and 601px
		  itemsTablet: [600,2], //2 items between 600 and 0
		  itemsMobile : [380,1] 
	  });
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
		owl.trigger('owl.stop');
	  })
	 
});

// TESTIMONIAL CAROUSEL

$(document).on('ready', function() {
	  var owl = $("#owl-demo1");
	 
	  owl.owlCarousel({
		  autoPlay: 4000,
		  items : 1, //10 items above 1000px browser width
		  itemsDesktop : [1920,1], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,1], // betweem 900px and 601px
		  itemsTablet: [600,1], //2 items between 600 and 0
		  itemsMobile : [380,1] 
	  });
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
		owl.trigger('owl.stop');
	  })
	 
});




    $(document).on('ready', function() {
     
      // Client carousel (owl-demo2) - Smooth Infinite Scroll like Partnership
      var owl = $("#owl-demo2");
     
      owl.owlCarousel({
        autoPlay: 3500,
        stopOnHover: true,
        navigation: false,
        pagination: false,
        slideSpeed: 2000,
        paginationSpeed: 2000,
        singleItem: false,
        mouseDrag: false,
        touchDrag: false,
        itemsCustom: [
          [0, 2],
          [480, 3],
          [768, 4],
          [992, 5],
          [1200, 6],
          [1400, 6],
          [1600, 6]
        ],
        addClassActive: false,
        transitionStyle: "fade"
      });

      // Client carousel pause on hover
      owl.on('mouseenter', function() {
        owl.trigger('owl.stop');
      }).on('mouseleave', function() {
        owl.trigger('owl.play', 3500);
      });

      // Auto restart after initialization
      setTimeout(function() {
        owl.trigger('owl.play', 3500);
      }, 1000);

      // Partnership carousel (owl-demo3) - Smooth Infinite Scroll
      var owlPartnership = $("#owl-demo3");
     
      owlPartnership.owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        pagination: false,
        slideSpeed: 2000,
        paginationSpeed: 2000,
        singleItem: false,
        mouseDrag: false,
        touchDrag: false,
        itemsCustom: [
          [0, 2],
          [480, 3],
          [768, 4],
          [992, 5],
          [1200, 6],
          [1400, 6],
          [1600, 6]
        ],
        addClassActive: false,
        transitionStyle: "fade"
      });

      // Smooth continuous scrolling effect
      owlPartnership.on('mouseenter', function() {
        owlPartnership.trigger('owl.stop');
      }).on('mouseleave', function() {
        owlPartnership.trigger('owl.play', 3000);
      });

      // Auto restart after initialization
      setTimeout(function() {
        owlPartnership.trigger('owl.play', 3000);
      }, 1000);
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
      })
     
    });

