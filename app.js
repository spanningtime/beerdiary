(function () {

  $(".dropdown-button").dropdown();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  var grainsArray = [];
  var renderGrainsTable = function() {
    var grainsInput = $('<div class="row"><div class="col 12"></div>\
    <div class="input-field col s6"><input id="grainType" type="text">\
    <label for="grainType">Type</label></div><div class="input-field col s6">\
    <input id="grainAmount" type="text"><label for="grainAmount">\
    Amount</label></div></div></div>');


    $(".grainsInputBody").append(grainsInput);
  };

  var $addGrains = $('.addGrains');
  $addGrains.click(function() {
    grainsArray.push({Type: '', Amount: ''});
    renderGrainsTable();

  });





})();
