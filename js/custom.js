// Postcode test-

$('#edit-postnatal-course-search-postcode').keyup(function() {
        this.value = this.value.toLocaleUpperCase();
      });

// ********* Header - Search ***********//

$(".nav-search-close").on("click", function(){
    var icon = $('.search-display-button');
    var icon_fa_icon = icon.attr('data-icon');
    var icon_fa_prefix = icon.attr('data-prefix');

    $(".nav-search-form").toggle("slide");
    
    if (icon_fa_prefix === 'far') {
        icon.attr('data-prefix', 'fas');
    } else {
        icon.attr('data-prefix', 'far');
    }

    if (icon_fa_icon === "times-circle") {			// Search is closed
        icon.attr('data-icon', 'search');
        $(this).removeClass("open").addClass("close");
        $(".nav-search-close button").removeClass("black-text-20").addClass("nct-dark-green-text");
	$(".social-media-icons").addClass("d-lg-inline-block");
    } else {							// Search is open
        icon.attr('data-icon', 'times-circle');
        $(this).removeClass("close").addClass("open");
        $(".nav-search-close button").removeClass("nct-dark-green-text").addClass("black-text-20");
	$(".social-media-icons").removeClass("d-lg-inline-block");
    }

});


$(".search-accordion-section a").on("click", function(){
    var icon = $(this).find('.accordion-icon');
    var icon_fa_icon = icon.attr('data-icon');
    var icon_fa_prefix = icon.attr('data-prefix');	

    if (icon_fa_icon === "chevron-down") {			
        icon.attr('data-icon', 'chevron-up');
    } else {					
        icon.attr('data-icon', 'chevron-down');
    }

});


$(".multi-accordion-section a, .accordion-section a, .content-accordion-section a").on("click", function(){
    var icon = $(this).find('.accordion-icon');
    var icon_fa_icon = icon.attr('data-icon');
    var icon_fa_prefix = icon.attr('data-prefix');	

    if (icon_fa_icon === "plus") {			
        icon.attr('data-icon', 'minus');
    } else {					
        icon.attr('data-icon', 'plus');
    }

});





// ********* Datepicker ***********//
  $( function() {
    $( ".datepicker" ).datepicker({dateFormat: "dd/mm/yy"});
  } );
  
  
$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });	
});



$(function () {
	$('[data-toggle="tooltip"]').tooltip()
  })






  $(function () {

  // Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})
  


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
    
    
  })

