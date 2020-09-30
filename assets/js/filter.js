var $grid = $('.grid').imagesLoaded( function() {
  $grid.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
});

$(document).ready(function(){

	setTimeout(function(){
		$("#myModal").modal('show')
	}, 2000);
        
    });

// var $grid = $('.grid').imagesLoaded( function() {
//   // init Isotope after all images have loaded
//   $grid.isotope({
//     itemSelector: '.grid-item',
//   percentPosition: true,
//   masonry: {
//     // use element for option
//     columnWidth: '.grid-sizer'
//   }
//   });
// });





// init Isotope
// var $grid = $('.grid').isotope({
//   // options
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   masonry: {
//     // use element for option
//     columnWidth: '.grid-sizer'
//   }
// });


// check if images are loaded
// $grid.imagesLoaded().progress( function() {
//   $grid.isotope('layout');

// });



// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});