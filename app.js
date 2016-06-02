(function () {

  $(".dropdown-button").dropdown();


  $.ajaxSetup({
    headers: {
      'x-requested-with': 'whatever.com'
    }
  });



  var styleQuestion = $('<section class="styleQuestion question">What style of beer are you brewing?<br><input class="styleQuestionInput"></input><br><a class="waves-effect waves-light btn styleQuestionButton">Next</a></section>');

  var nameQuestion = $('<section class= nameQuestion question">Give your beer a name!<br><input class="nameQuestionInput"></input><br><a class="waves-effect waves-light btn nameQuestionButton">Next</a></section>')

  var $grainsQuestion = $('<section class="center-align grainsQuestion question">Enter your grain bill.</section>')

  var $mainArea = $('.mainArea');

  var addGrainsDoneButton = $('<div class="row marginBottom"><a class="addGrainsButton btn-floating"><i class=" material-icons">\
      add</i></a><a class="doneGrainsButton\
      waves-effect waves-light btn">Done With Grains</a></div>');

  var doneGrainsButton = $('<a class="doneGrainsButton waves-effect waves-light btn">Done With Grains</a>');

  var $addHopsButton = $('<a class="addHopsButton btn-floating"><i class=" material-icons">add</i></a>');

  var $doneHopsButton = $('<a class="doneHopsButton waves-effect waves-light btn">Done With Hops</a>');

  var $hopsQuestion = $('<div class="col s12 hopsQuestion question center-align"<section class=hopsQuestion question">Enter your hop bill.</section></div>')

  var $sessionBeerDetails = $('<div class="row"><div id="brewName" class="col s4 center-align sessionDetails" ></div>\
      <div id="beerStyle"class="col s4 center-align sessionDetails"></div>\
      <div class="col s4 center-align sessionDetails" id="date"></div></div>');

  var $beerListSelect = $('<div class="col s12 beerListSelect">\
    <h1>Select the correct style</h1>\
    <ul id="#beerList"></ul></div>');

  var $beerListUl = $beerListSelect.children('ul')

  var $inputField = $('.input-field');

  var $startNewSession = $('.startNewSession');

  window.beers = JSON.parse(localStorage.getItem('beers')) || [];

  window.beer = {};


  var grainsArray = [];

  var hopsArray = [];

  var beerStyleArray = [];

  var beerStyleListArray = [];

  var $belowMainArea = $('.belowMainArea');

  var beerId = '';

  var beerStyleData = [];

  var appendRecipeToDropdown = function(newRecipe) {
      $('#dropdown1').children(0).prepend('<li><a href="#">' + newRecipe.name + '</a></li>');
  };

  for (var x = 0; x < beers.length; x++) {
    appendRecipeToDropdown(beers[x]);
  }

  var addInputValuesToBeerObject = function() {
    var batchStats = {};
    var hydrometerReadings = {};
    var otherNotes = $('#otherNotes').val();
    var mashSchedule = {};
    var yeast = {};
    var cost = {};
    batchStats.targetOG = $('#targetOG').val();
    batchStats.targetFG = $('#targetFG').val();
    batchStats.abv = $('#abv').val();
    batchStats.ibu = $('#ibu').val();
    hydrometerReadings.preBoil = $('#preBoil').val();
    hydrometerReadings.postBoil = $('#postBoil').val();
    hydrometerReadings.racked = $('#racked').val();
    hydrometerReadings.final = $('#final').val();
    mashSchedule.mashType = $('#mashType').val();
    mashSchedule.mashTemperature = $('#mashTemperature').val();
    mashSchedule.mashTime = $('#mashTime').val();
    yeast.type = $('#yeastType').val();
    yeast.averageAttenuation = $('#averageAttenuation').val();
    yeast.optimumTemp = $('#optimumTemp').val();
    yeast.starterCheckbox = $('#starterCheckbox').val();
    cost.grains = $('#grains').val();
    cost.hops = $('#hops').val()
    cost.yeast = $('#yeast').val();
    cost.other = $('#other').val();
    beer.batchStats = batchStats;
    beer.hydrometerReadings = hydrometerReadings;
    beer.mashSchedule = mashSchedule;
    beer.yeast = yeast;
    beer.cost = cost;

    // beers is an []
    beers.push(beer);
    appendRecipeToDropdown(beer);






    localStorage.setItem('beers', JSON.stringify(beers));
  }

  var addSaveButton = function() {
    $belowMainArea.append($('<div class="center-align"><a class="waves-effect waves-light btn-large saveButton center-align"><i class="material-icons right">cloud</i>Save</a></div>'))
    $('.saveButton').click(addInputValuesToBeerObject)

  }

  var generateRightColumn = function() {
    $belowMainArea.append($('<div class="row"><div class="col s6"><div class="row">\
      <div class="col s12"><h5>Mash Schedule</h5></div></div></div>\
      <a class="mashCalc" href="https://www.brewersfriend.com/mash">Mash Calculator</a><div class="row"><div class="col s6"><div class="row">\
      <div class="col s12"><div class="input-field col s12"><input id="mashType"\
      type="text"><label for="type">Type/Infusion Amount</label></div></div>\
      <div class="col s6"><div class="input-field col s12">\
      <input id="mashTemperature" type="text"><label for="temperature">Temperature\
      </label></div></div><div class="col s6"><div class="input-field col s12">\
      <input id="mashTime" type="text"><label for="time">Time</label></div></div>\
      </div><div class="row"><div class="col s12"><h5>Yeast</h5></div></div>\
      <div class="row"><div class="col s12"><div class="input-field col s6">\
      <input id="yeastType" type="text"><label for="yeastType">Type</label>\
      </div><div><div class="input-field col s6"><input id="averageAttenuation"\
       type="text"><label for="averageAttenuation">Average Attenuation</label>\
       </div></div><div class="input-field col s6"><input id="optimumTemp"\
      type="text"><label for="optimumTemp">Optimum Temperature</label></div><div>\
      <input type="checkbox" id="starterCheckbox"/><label for="starterCheckbox">Starter?</label></div>\
      </div></div><div class="row"><div class="col s12"><h5>Cost</h5></div></div>\
      <div class="row"><div class="col s12"><div class="input-field col s6">\
      <input id="grains" type="text"><label for="grains">Grains</label>\
      </div><div><div class="input-field col s6"><input id="hops" type="text">\
      <label for="hops">Hops</label></div></div><div><div class="input-field col\
       s6"><input id="yeast" type="text"><label for="yeast">Yeast</label></div>\
      </div><div><div class="input-field col s6"><input id="other" type="text">\
      <label for="other">Other</label></div></div></div></div></div></div>')).hide().fadeIn(800);
      addSaveButton();

  }

  var generateLeftColumn = function() {
    $belowMainArea.append($('<div class="col s6"><div class="row"><div class="col s12"><h5>BatchStats</h5></div></div><div class="row">\
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
     <textarea id="otherNotes" class="materialize-textarea"></textarea></div>\
     </div></form></div></div>')).hide().fadeIn(800);
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
    console.log(hopsArray);
  }

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
    $('.addHopsButton').click(addHopsRow)
    $doneHopsButton.click(hideHopsRowAndQuestion);
  }

  var appendGrainsAddDoneButtons = function() {
    $mainArea.append(addGrainsDoneButton);
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
    console.log(grainsArray);
  }

  var renderGrainsTable = function() {
    $mainArea.append($('<div class="col s6"><div class="row belowGrainsTableHeader">\
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
    $('.addGrainsButton').click(addGrainsFieldAndButtons);
  }

  var createModalContent = function() {
    $('.modal-content').append($('<h4>' + beer.style + '</h4><p>' + beerStyleData[0].description + '</p><div class="col s6">Minimum ABV: ' + beerStyleData[0].abvMin + '%</div><div class="col s6">Maximum ABV: ' + beerStyleData[0].abvMax + '%</div><div class="col s6">Minimum Final Gravity: ' + beerStyleData[0].fgMin + '</div><div class="col s6">Maximum Final Gravity: ' + beerStyleData[0].fgMax + '</div><div class="col s6">Minimum IBUs: ' + beerStyleData[0].ibuMin + '</div><div class="col s6">Maximum IBUs: ' + beerStyleData[0].ibuMax + '</div>'));
    console.log(beerStyleData)
  };

  var startXHR2 = function() {
    var $xhr = $.getJSON('http://cors-anywhere.herokuapp.com/api.brewerydb.com/v2/style/' + beerId + '?key=90d1c30e19a750d723e5318a32f983f3');

    $xhr.done(function(data) {
      var obj = {};
      obj.description = data.data.description;
      obj.abvMin = data.data.abvMin;
      obj.abvMax = data.data.abvMax;
      obj.fgMin = data.data.fgMin;
      obj.fgMax = data.data.fgMax;
      obj.ibuMin = data.data.ibuMin;
      obj.ibuMax = data.data.ibuMax;
      beerStyleData.push(obj);
      createModalContent();
      console.log(obj);
    });
  }


  var loadGrainsQuestionAndSessionDetails = function() {
    startXHR2();
    beer.name = $('.nameQuestionInput').val()
    $('.nameQuestion').hide();
    $mainArea.prepend($sessionBeerDetails);
    $('#brewName').append('<h4>' + beer.name + '</h4>')
    $('#beerStyle').append('<h4><a class="modal-trigger" href="#modal1">' + beer.style + '</a></h4>')
    $('.modal-trigger').leanModal();
    $('#date').append('<h4>' + (beer.date.getMonth() + 1) + "." + beer.date.getDate() + "." + beer.date.getFullYear() + '</h4>')
    $mainArea.append($grainsQuestion).hide().fadeIn(1000);
    addGrainsFieldAndButtons();
    loadNewGrainsFieldAndButtons();
    $('.doneGrainsButton').click(hideGrainRowAndQuestion)
  }

  var loadNameQuestion = function(event) {
    beer.style = $(event.target).text();
    for (var x = 0; x < beerStyleArray.length; x++) {
      if (beerStyleArray[x].name === beer.style) {
        beerId = beerStyleArray[x].id;
        break;
      }
    }
    $beerListSelect.hide();
    $('.styleQuestion').hide();
    $mainArea.append(nameQuestion).hide().fadeIn(1000);
    $('.nameQuestionButton').click(loadGrainsQuestionAndSessionDetails);
    console.log(beerId);
  }

  var selectBeerListItem = function() {
    $('.beerListItem').click(loadNameQuestion)

  }

  var createBeerListSelect = function() {
    for (var x = 0; x < beerStyleArray.length; x++) {
      $beerListUl.append('<li class="beerListItem">' + beerStyleArray[x].name + '</li>')
    }
    $mainArea.append($beerListSelect);

    selectBeerListItem();
  }

  var startXHR = function() {
    $('.styleQuestionButton').hide();
    beer.style = $('.styleQuestionInput').val();
    var $xhr = $.getJSON('http://cors-anywhere.herokuapp.com/api.brewerydb.com/v2/search/style?q=' + beer.style + '&key=90d1c30e19a750d723e5318a32f983f3');

    $xhr.done(function(data) {
      if ($xhr.status !== 200) {
          return;
      }
      for (var x = 0; x < data.data.length; x++) {
        var obj = {}
        obj.name = data.data[x].name
        obj.id = data.data[x].id
        beerStyleArray.push(obj);
      }
      console.log(beerStyleArray);
      createBeerListSelect();
    });
  }



  var loadStyleQuestion = function() {
    beer.date = new Date();
    // Append the Style Questions HTML to the page
    $mainArea.append(styleQuestion).hide().fadeIn(1000);
    // Establish event listener for new button
    $('.styleQuestionButton').click(startXHR);
  }

  // var hideStartSession = function() {
  //   $startNewSession.hide();
  // }
  //
  // $startNewSession.click(function() {
  //   hideStartSession();
  // });

  loadStyleQuestion();









})();
