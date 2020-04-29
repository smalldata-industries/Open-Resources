$('.card-container').isotope({
  // options
  itemSelector: '.card',
  layoutMode: 'fitRows'

});


// init Isotope
var $grid = $('.card-container').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});