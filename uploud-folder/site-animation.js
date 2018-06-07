$( function() {
  $( "#lang" ).click(function() {
    $(this).toggleClass("nav-eng");
  });
} );
  
  
jQuery(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop()>0) {
        $(".nav-container").css("background", "rgba(50, 50, 50, 0.65)");
      }
      else if ($(this).scrollTop()<70) {
        $(".nav-container").css("background", "rgb(35, 35, 35)");
        }
  });
}); 



$(document).ready(function(){
  $(".Design__slides").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
   dots: true
  });
});


  var waypoint = new Waypoint({
    element: document.getElementById('pizza2'),
    handler: function(dir) {
      $('#pizza2').addClass('animated');
  if (dir === 'down')
		$('#pizza2').addClass('Wtubes__pizza-1-2')
			
	   else
	 	 $('#pizza2').removeClass('Wtubes__pizza-1-2')
	                
  },
  offset: '55%'
})  


 
 //WTUBES
var waypoint = new Waypoint({
  element: document.getElementById('Wtubes'),
  handler: function(dir) {
    $('#Wtubes').addClass('animated');
  if (dir === 'down')
		$('#Wtubes').addClass('Wtubes__warm')
	    else
	  	 $('#Wtubes').removeClass('Wtubes__warm')
	                
   },
  offset: '90%'
})  

 var waypoint = new Waypoint({
   element: document.getElementById('Wtubes'),
   handler: function(dir) {
 	  $('#Wtubes').addClass('animated');
    if (dir === 'down')
 		$('#Wtubes').removeClass('Wtubes__warm')

     else
 	 	 $('#Wtubes').addClass('Wtubes__warm')
    
   },
   offset: '-140px'
 })
  

//SIO
var waypoint = new Waypoint({
  element: document.getElementById('Sio'),
  handler: function(dir) {
    $('#Sio').addClass('animated');
  if (dir === 'down')
		$('#Sio').addClass('Design__text-two')
	    else
	  	 $('#Sio').removeClass('Design__text-two')
	                
   },
  offset: '80%'
})  

//Sio-icon
var waypoint = new Waypoint({
  element: document.getElementById('Sio-icon'),
  handler: function(dir) {
    $('#Sio-icon').addClass('animated');
  if (dir === 'down')
		$('#Sio-icon').addClass('Design__img-back')
	    else
	  	 $('#Sio-icon').removeClass('Design__img-back')
	                
   },
  offset: '60%'
})  

//phone7
var waypoint = new Waypoint({
  element: document.getElementById('phone7'),
  handler: function(dir) {
    $('#phone7').addClass('animated');
  if (dir === 'down')
		$('#phone7').addClass('iphone7')
	    else
	  	 $('#phone7').removeClass('iphone7')
	                
   },
  offset: '80%'
})  

//LI1
var waypoint = new Waypoint({
  element: document.getElementById('l1'),
  handler: function(dir) {
     $('#l1').addClass('App__item1');
  if (dir === 'down')
		$('#l1').addClass('App__item1')
	    else
	  	 $('#l1').removeClass('App__item1')
	                
   },
  offset: '90%'
})  

//LI2
var waypoint = new Waypoint({
  element: document.getElementById('l2'),
  handler: function(dir) {
    $('#l2').addClass('App__item2');
  if (dir === 'down')
		$('#l2').addClass('App__item2')
	    else
	  	 $('#l2').removeClass('App__item2')
	                
   },
  offset: '90%'
})  

//LI3
var waypoint = new Waypoint({
  element: document.getElementById('l3'),
  handler: function(dir) {
    $('#l3').addClass('App__item3');
  if (dir === 'down')
		$('#l3').addClass('App__item3')
	    else
	  	 $('#l3').removeClass('App__item3')
	                
   },
  offset: '90%'
})  

//LI4
var waypoint = new Waypoint({
  element: document.getElementById('l4'),
  handler: function(dir) {
    $('#l4').addClass('App__item4');
  if (dir === 'down')
		$('#l4').addClass('App__item4')
	    else
	  	 $('#l4').removeClass('App__item4')
	                
   },
  offset: '90%'
})  

//LI5
var waypoint = new Waypoint({
  element: document.getElementById('l5'),
  handler: function(dir) {
    $('#l5').addClass('App__item5');
  if (dir === 'down')
		$('#l5').addClass('App__item5')
	    else
	  	 $('#l5').removeClass('App__item5')
	                
   },
  offset: '98%'
})  

