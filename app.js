(function () {

  $(".dropdown-button").dropdown();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  var $beerStyle = $('#beer_style');
  $beerStyle.click(function() {
    console.log($beerStyle.val());
  })

  var $xhr = $.getJSON()


})();
