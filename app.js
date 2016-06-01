(function () {

  $(".dropdown-button").dropdown();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  var styleQuestion = $('<section class="center-align styleQuestion question">What style of beer are you making?<br><input class="styleQuestionInput"></input><br><a class="waves-effect waves-light btn styleQuestionButton">Next</a></section>');

  var nameQuestion = $('<section class="center-align nameQuestion question">What do you want to name your beer?<br><input class="nameQuestionInput"></input><br><a class="waves-effect waves-light btn nameQuestionButton">Next</a></section>')

  var $grainsQuestion = $('<section class="center-align grainsQuestion question">Enter your grain bill.</section>')

  var $mainArea = $('.mainArea');

  var addGrainsButton = $('<div class="addGrainsButton"><a class="addGrainsButton btn-floating"><i class=" material-icons">\
  add</i></a></div>');

  var doneGrainsButton = $('<div><a class="doneGrainsButton waves-effect waves-light btn">Done</a></div>');

  var $addHopsButton = $('<div class="addHopsButton"><a class="addHopsButton btn-floating"><i class=" material-icons">\
  add</i></a></div>');

  var $doneHopsButton = $('<div><a class="doneHopsButton waves-effect waves-light btn">Done</a></div>');

  var $hopsQuestion = $('<div class="col s12 hopsQuestion question"<section class="center-align hopsQuestion question">Enter your hop bill.</section></div>')

  var $sessionBeerDetails = $('<div class="row"><div id="brewName" class="col s4 center-align" ></div>\
      <div id="beerStyle"class="col s4 center-align"></div><div class="col s4 center-align" id="date"></div></div>');

  var $inputField = $('.input-field');

  var $startNewSession = $('.startNewSession');

  var beer = {};

  var grainsArray = [];

  var hopsArray = [];

  var generateRightColumn = function() {
    $mainArea.append($('<div class="row"><div class="col s6"><div class="row">\
      <div class="col s12"><h5>Mash Schedule</h5></div></div></div>\
      <a class="mashCalc" href="https://www.brewersfriend.com/mash">Mash Calculator</a><div class="row"><div class="col s6"><div class="row">\
      <div class="col s12"><div class="input-field col s12"><input id="type"\
      type="text"><label for="type">Type/Infusion Amount</label></div></div>\
      <div class="col s6"><div class="input-field col s12">\
      <input id="temperature" type="text"><label for="temperature">Temperaure\
      </label></div></div><div class="col s6"><div class="input-field col s12">\
      <input id="time" type="text"><label for="time">Time</label></div></div>\
      </div><div class="row"><div class="col s12"><h5>Yeast</h5></div></div>\
      <div class="row"><div class="col s12"><div class="input-field col s6">\
      <input id="yeastType" type="text"><label for="yeastType">Type</label>\
      </div><div><div class="input-field col s6"><input id="averageAttenuation"\
       type="text"><label for="averageAttenuation">Average Attenuation</label>\
       </div></div><div class="input-field col s6"><input id="optimumTemp"\
      type="text"><label for="optimumTemp">Optimum Temperature</label></div><div>\
      <input type="checkbox" id="test6"/><label for="test6">Starter?</label></div>\
      </div></div><div class="row"><div class="col s12"><h5>Cost</h5></div></div>\
      <div class="row"><div class="col s12"><div class="input-field col s6">\
      <input id="grains" type="text"><label for="grains">Grains</label>\
      </div><div><div class="input-field col s6"><input id="hops" type="text">\
      <label for="hops">Hops</label></div></div><div><div class="input-field col\
       s6"><input id="yeast" type="text"><label for="yeast">Yeast</label></div>\
      </div><div><div class="input-field col s6"><input id="other" type="text">\
      <label for="other">Other</label></div></div></div></div></div></div>'));
  }

  var generateLeftColumn = function() {
    $mainArea.append($('<div class="col s6"><div class="row"><div class="col s12"><h5>BatchStats</h5></div></div><div class="row">\
    <div class="col s12"><div class="input-field col s6"><input id="targetOG"\
    type="text"><label for="targetOG">Target Original Gravity</label>\
    </div><div class="input-field col s6"><input id="targetFG" type="text">\
    <label for="targetFG">Target Final Gravity</label></div></div></div>\
    <div class="row"><div class="col s12"><div class="input-field col s6">\
    <input id="abv" type="text"><label for="abv">ABV</label></div>\
    <div class="input-field col s6"><input id="ibu" type="text">\
    <label for="ibu">IBUs</label></div></div></div><div class="row">\
    <div class="col s12"><h5>Hydrometer Readings</h5></div></div>\
    <div class="row"><div class="col s12"><div class="input-field col s6">\
    <input id="preBoil" type="text"><label for="preBoil">Pre-Boil</label>\
    </div><div class="input-field col s6"><input id="postBoil" type="text">\
    <label for="PostBoil">Post-Boil</label></div></div></div><div class="row">\
    <div class="col s12"><div class="input-field col s6"><input id="racked"\
     type="text"><label for="racked">Racked</label></div>\
     <div class="input-field col s6"><input id="final" type="text">\
     <label for="final">Final</label></div></div></div><div class="row">\
     <div class="col s12"><h5>Other Notes</h5></div></div><div class="row">\
     <form class="col s12"><div class="row"><div class="input-field col s12">\
     <textarea id="textarea1" class="materialize-textarea"></textarea></div>\
     </div></form></div></div>'));
  };

  var addHopsToTable = function() {
    var $hopsRow = $('.hopsRow');
    for (var x = 0; x < $hopsRow.length; x++) {
      var hopsObject = {}
      var hopsType = $hopsRow.eq(x).children().eq(0).children().eq(0).val();
      var hopsAcid = $hopsRow.eq(x).children().eq(2).children().eq(0).val();
      var hopsAmount = $hopsRow.eq(x).children().eq(1).children().eq(0).val()
      $('.hopsTableBody').append($('<tr><td>' + hopsType + '</td><td>' + hopsAcid + '</td><td>' + hopsAmount + '</td></tr>'));
      hopsObject.type = hopsType;
      hopsObject.amount = hopsAmount;
      hopsArray.push(hopsObject);
    }
    generateLeftColumn();
    generateRightColumn();
    console.log(hopsObject);
    console.log(hopsArray);
  }

// ****** FIRST ROW ******
// $('.hopsRow').eq(0).children().eq(0).children().eq(0).val()
// "Cascade"
// $('.hopsRow').eq(0).children().eq(2).children().eq(0).val()
// "10%"
// $('.hopsRow').eq(0).children().eq(1).children().eq(0).val()
// "10oz"

// ******* SECOND ROW *******
// $('.hopsRow').eq(1).children().eq(1).children().eq(0).val()
// "Summit"
// $('.hopsRow').eq(1).children().eq(3).children().eq(0).val()
// "5%"
// $('.hopsRow').eq(1).children().eq(2).children().eq(0).val()
// "5oz"

  var renderHopsTable = function() {
    $mainArea.append('<div class="col s6"><h5>Hops!</h5></div></div><div class="row"><div class="col s6">\
    <table class="striped"><thead><tr><th>Type</th><th>Alpha Acids</th>\
    <th>Amount</th></tr></thead><tbody class="hopsTableBody"></tbody></table></div></div>')
    addHopsToTable();
  }

  var hideHopsRowAndQuestion = function() {
    $hopsQuestion.hide();
    $('.doneHopsButton').hide();
    $('.btn-floating').hide();
    $mainArea.children('.hopsRow').hide();
    renderHopsTable();
  }

  var appendHopsAddDoneButtons = function() {
    $mainArea.append($addHopsButton, $doneHopsButton)
  }

  var addHopsRow = function() {
    $mainArea.append($('<div class="row hopsRow"><div class="input-field col s4"><input id="hopType" type="text">\
        <label for="hopType">Type</label></div><div class="input-field col s4">\
        <input id="hopAmount" type="text"><label for="hopAmount">Amount</label> </div><div class="input-field col s4">\
        <input id="alphaAcids" type="text"><label for="alphaAcids">Alpha Acids</label> </div></div></div>'))
    appendHopsAddDoneButtons();
  }


  var addHopsFieldAndButtons = function() {
    $mainArea.append($hopsQuestion);
    addHopsRow();
    appendHopsAddDoneButtons();
    $addHopsButton.click(addHopsRow)
    $doneHopsButton.click(hideHopsRowAndQuestion);
  }

  var appendGrainsAddDoneButtons = function() {
    $mainArea.append(addGrainsButton, doneGrainsButton);
  }

  var addGrainsFieldAndButtons = function() {
    $mainArea.append($('<div class="row grainRow"><div class="input-field col s6"><input class="grainType" type="text">\
    <label for="grainType">Type</label></div><div class="input-field col s6">\
    <input class="grainAmount" type="text"><label for="grainAmount">Amount</label> </div></div>'));
    appendGrainsAddDoneButtons();
  };

  var addGrainsToTable = function() {
    var $grainRow = $('.grainRow');
    for (var x = 0; x < $grainRow.length; x++) {
      var grainObject = {}
      var grainType = $grainRow.eq(x).children()[0].childNodes[0].value;
      var grainAmount = $grainRow.eq(x).children()[1].childNodes[1].value;
      $('.grainsTableBody').append($('<tr><td>' + grainType + '</td><td>' + grainAmount +  '</td></tr>'));
      grainObject.type = grainType;
      grainObject.amount = grainAmount;
      grainsArray.push(grainObject);
    }
    addHopsFieldAndButtons();
  }

  var renderGrainsTable = function() {
    $mainArea.append($('<div class="col s6"><div class="row">\
    <div class="col s12"><h5>Grains And Other Ingredients</h5></div></div>\
    <div class="grainsInputBody"</div>\
    <div class="row">\
    <div class="col s12"><div class="row"><div class="col s12">\
    <table class="striped"><thead><th>Type</th><th>Amount</th></thead>\
    <tbody class="grainsTableBody"></tbody><tfoot><tr><td></td>\
    </tr></tfoot></table></div></div></div></div></div></div>'));
    addGrainsToTable();
  }




  var hideGrainRowAndQuestion = function() {
    $grainsQuestion.hide();
    $('.doneGrainsButton').hide();
    $('.btn-floating').hide();
    $mainArea.children('.grainRow').hide();
    renderGrainsTable();
  }

  var loadNewGrainsFieldAndButtons = function() {
    addGrainsButton.click(addGrainsFieldAndButtons);
  }

  var loadGrainsQuestion = function() {
    beer.name = $('.nameQuestionInput').val()
    $('.nameQuestion').hide();
    $mainArea.prepend($sessionBeerDetails);
    $('#brewName').append('<h4> Name: ' + beer.name + '</h4>')
    $('#beerStyle').append('<h4> Style: ' + beer.style + '</h4>')
    $('#date').append('<h4>' + (beer.date.getMonth() + 1) + "/" + beer.date.getDate() + "/" + beer.date.getFullYear() + '</h4>')
    $mainArea.append($grainsQuestion).hide().fadeIn(2000);
    addGrainsFieldAndButtons();
    loadNewGrainsFieldAndButtons();
    doneGrainsButton.click(hideGrainRowAndQuestion)
  }


  var loadNameQuestion = function() {
      beer.style = $('.styleQuestionInput').val();
      $('.styleQuestion').hide();
      $mainArea.append(nameQuestion).hide().fadeIn(2000);
      $('.nameQuestionButton').click(loadGrainsQuestion);
    }

  var loadStyleQuestion = function() {
    // Append the Style Questions HTML to the page
    $mainArea.append(styleQuestion).hide().fadeIn(2000);
    // Establish event listener for new button
    $('.styleQuestionButton').click(loadNameQuestion);
  }

  var hideStartSession = function() {
    $startNewSession.hide();
  }

  $startNewSession.click(function() {
    beer.date = new Date();
    hideStartSession();
    loadStyleQuestion();
  });










})();
