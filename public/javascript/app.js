(function() {
  $(".dropdown-button").dropdown();

  $.ajaxSetup({
    headers: {
      'x-requested-with': 'whatever.com'
   }
  });

/* HTML variables to construct Style Question section */
  var styleQuestionSection = '<section class="styleQuestion question">'
  var styleQuestionInput = '<input class="styleQuestionInput"></input>'
  var styleQuestionButton = '<a class="waves-effect waves-light btn styleQuestionButton">'
  var closeStyleQuestionButton = '</a>'
  var closeStyleQuestionSection = '</section>'
  var lineBreak = '<br>'

  var styleQuestion = $(styleQuestionSection + "What style of beer are you brewing?"+ lineBreak + styleQuestionInput + lineBreak + styleQuestionButton + "Next" + closeStyleQuestionButton + closeStyleQuestionSection)

  /* HTML variables to construct nameQuestion */
  var nameQuestionSection = '<section class="nameQuestion question">'
  var nameQuestionInput = '<input class="nameQuestionInput"></input>'
  var nameQuestionButton = '<a class="waves-effect waves-light btn nameQuestionButton">'
  var closeAnchorTag = '</a>'
  var closeSectionTag = '</section>'

  var nameQuestion = $(nameQuestionSection + "Give your beer a name!" + lineBreak + nameQuestionInput + lineBreak + nameQuestionButton + "Next" + closeAnchorTag + closeSectionTag);

  var $grainsQuestion = $('<section class="center-align grainsQuestion question">Enter your grain bill.</section>');

  var $mainArea = $('.mainArea');

  /* HTML variables to construct addGrainsDoneButton */
  var marginBottomRow = '<div class="row marginBottom">';
  var addGrainsButton = '<a class="addGrainsButton btn-floating">';
  var addMaterialIcon = '<i class="material-icons">add</i>';
  var doneGrainsButton = '<a class="doneGrainsButton waves-effect waves-light btn">';
  var openDiv = '<div>';
  var closeDiv = '</div>';

  var $addGrainsDoneButton = $(marginBottomRow + addGrainsButton + addMaterialIcon + closeAnchorTag +
      doneGrainsButton + "Done With Grains" + closeAnchorTag + closeDiv);

  var $addHopsButton = $('<a class="addHopsButton btn-floating"><i class=" material-icons">add</i></a>');

  var $doneHopsButton = $('<a class="doneHopsButton waves-effect waves-light btn">Done With Hops</a>');

  var $hopsQuestion = $('<div class="col s12 hopsQuestion question center-align"<section class=hopsQuestion question">Enter your hop bill.</section></div>');

/* HTML variables to construct $sessionBeerDetails */
  var row = '<div class="row">';
  var brewNameColumn = '<div id="brewName" class="col s4 center-align sessionDetails">';
  var beerStyleColumn = '<div id="beerStyle" class="col s4 center-align sessionDetails">';
  var dateColumn = '<div id="date"class="col s4 center-align sessionDetails">';

  var $sessionBeerDetails = $(row + brewNameColumn + closeDiv +
      beerStyleColumn + closeDiv +
      dateColumn + closeDiv + closeDiv);

  /* HTML variables to construct $beerListSelect */
  var beerListSelectColumn = '<div class="col s12 beerListSelect">';
  var h1 = '<h1>';
  var closeH1 = '</h1>';
  var beerListUl = '<ul id="#beerList"></ul>';

  var $beerListSelect = $(beerListSelectColumn + h1 + "Select the correct style"
   + closeH1 + beerListUl + closeDiv);

  var $beerListUl = $beerListSelect.children('ul');

  window.beers = JSON.parse(localStorage.getItem('beers')) || [];
  window.beer = {};

  var grainsArray = [];
  var hopsArray = [];
  var beerStyleArray = [];
  var $belowMainArea = $('.belowMainArea');
  var beerId = '';
  var beerStyleData = [];

  var appendRecipeToDropdown = function(newRecipe) {
      $('#dropdown1').children(0).prepend('<li><a id="toast" href="#">' + newRecipe.name + '</a></li>');
      $('#dropdown1').children().click(function() {
        Materialize.toast('Coming soon!', 4000)
      });
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

/* HTML variables to construct saveButton*/
  var centerAlignDiv = '<div class="center-align">';
  var saveButton = '<a class="waves-effect waves-light btn-large saveButton center-align">';
  var saveMaterialIcon = '<i class="material-icons right">cloud</i>';

  var addSaveButton = function() {
    $belowMainArea.append($(centerAlignDiv + saveButton + saveMaterialIcon + "Save" + closeAnchorTag + closeDiv))
    $('.saveButton').click(addInputValuesToBeerObject)
  }

  var s6Column = '<div class="col s6">'
  var s12Column = '<div class="col s12">'
  var h5MashSchedule = '<h5>Mash Schedule</h5>'
  var mashCalcAnchor = '<a class="mashCalc" href="https://www.brewersfriend.com/mash">MashCalculator</a>'
  var inputFieldColS12 = '<div class="input-field col s12">'
  var inputFieldColS6 = '<div class="input-field col s6">'
  var mashTypeInputField = '<input id="mashType" type="text">'
  var mashTypeInputLabel = '<label for="type">Type/Infusion Amount</label>'
  var mashTempInputField = '<input id="mashTemperature" type="text">'
  var mashTempInputLabel = '<label for="temperature">Temperature</label>'
  var mashTimeInputField = '<input id="mashTime" type="text">'
  var mashTimeInputLabel = '<label for="time">Time</label>'
  var h5Yeast = '<h5>Yeast</h5>'
  var yeastTypeInputField = '<input id="yeastType" type="text">'
  var yeastTypeInputLabel = '<label for="yeastType">Type</label>'
  var attenuationInputField = '<input id="averageAttenuation" type="text">'
  var attenuationInputLabel = '<label for="averageAttenuation">Average Attenuation</label>'
  var optimumTempInputField = '<input id="optimumTemp" type="text">'
  var optimumTempInputLabel = '<label for="optimumTemp">Optimum Temperature</label>'
  var starterCheckbox = '<input type="checkbox" id="starterCheckbox"/>'
  var starterCheckboxLabel = '<label for="starterCheckbox">Starter?</label>'
  var h5Cost = '<h5>Cost</h5>'
  var grainsCostInputField = '<input id="grains" type="text">'
  var grainsCostInputLabel = '<label for="grains">Grains</label>'
  var hopsCostInputField = '<input id="hops" type="text">'
  var hopsCostInputLabel = '<label for="hops">Hops</label>'
  var yeastCostInputField = '<input id="yeast" type="text">'
  var yeastCostInputLabel = '<label for="yeast">Yeast</label>'
  var otherCostInputField = '<input id="other" type="text">'
  var otherCostInputLabel = '<label for="other">Other</label>'

  var generateRightColumn = function() {
    $belowMainArea.append($(row + s6Column + row + s12Column + h5MashSchedule +
      closeDiv + closeDiv + closeDiv + mashCalcAnchor + row + s6Column + row +
      s12Column + inputFieldColS12 + mashTypeInputField + mashTypeInputLabel +
      closeDiv + closeDiv + s6Column + inputFieldColS12 + mashTempInputField +
      mashTempInputLabel + closeDiv + closeDiv + s6Column + inputFieldColS12 +
      mashTimeInputField + mashTimeInputLabel + closeDiv + closeDiv + closeDiv +
      row + s12Column + h5Yeast + closeDiv + closeDiv + row + s12Column +
      inputFieldColS6 + yeastTypeInputField + yeastTypeInputLabel + closeDiv +
      openDiv + inputFieldColS6 + attenuationInputField + attenuationInputLabel
      + closeDiv + closeDiv + inputFieldColS6 + optimumTempInputField +
      optimumTempInputLabel + closeDiv + openDiv + starterCheckbox +
      starterCheckboxLabel + closeDiv + closeDiv + closeDiv + row + s12Column +
      h5Cost + closeDiv + closeDiv + row + s12Column + inputFieldColS6 +
      grainsCostInputField + grainsCostInputLabel + closeDiv + openDiv +
      inputFieldColS6 + hopsCostInputField + hopsCostInputLabel + closeDiv +
      closeDiv + openDiv + inputFieldColS6 + yeastCostInputField +
      yeastCostInputLabel + closeDiv + closeDiv + openDiv + inputFieldColS6 +
      otherCostInputField + otherCostInputLabel + closeDiv + closeDiv + closeDiv
      + closeDiv + closeDiv + closeDiv)).hide().fadeIn(800);
      addSaveButton();
  }

  var h5BatchStats = '<h5>Batch Statistics</h5>'
  var targetOGInputField = '<input id="targetOG" type="text">'
  var targetOGInputLabel = '<label for="targetOG">Target Original Gravity</label>'
  var targetFGInputField = '<input id="targetFG" type="text">'
  var targetFGInputLabel = '<label for="targetFG">Target Final Gravity</label>'
  var abvInputField = '<input id="abv" type="text">'
  var abvInputLabel = '<label for="abv">ABV</label>'
  var ibuInputField = '<input id="ibu" type="text">'
  var ibuInputLabel = '<label for="ibu">IBUs</label>'
  var h5Hydrometer = '<h5>HydrometerReadings</h5>'
  var preBoilInputField = '<input id="preBoil" type="text">'
  var preBoilInputLabel = '<label for="preBoil">Pre-Boil</label>'
  var postBoilInputField = '<input id="postBoil" type="text">'
  var postBoilInputLabel = '<label for="postBoil">Post-Boil</label>'
  var rackedInputField = '<input id="racked" type="text">'
  var rackedInputLabel = '<label for="racked">Racked</label>'
  var finalInputField = '<input id="final" type="text">'
  var finalInputLabel = '<label for="final">Final</label>'
  var h5OtherNotes = '<h5>Other Notes</h5>'
  var formS12 = '<form class="col s12">'
  var closeForm = '</form>'
  var otherNotesTextarea = '<textarea id="otherNotes" class="materialize-textarea"></textarea>'

  // <h5>Other Notes</h5></div></div><div class="row">\
  // <form class="col s12"><div class="row"><div class="input-field col s12">\
  // <textarea id="otherNotes" class="materialize-textarea"></textarea></div>\
  // </div></form></div></div>

  var generateLeftColumn = function() {
    $belowMainArea.append($(s6Column + row + s12Column + h5BatchStats +
      closeDiv + closeDiv + row + s12Column + inputFieldColS6 +
      targetOGInputField + targetOGInputLabel + closeDiv + inputFieldColS6 +
      targetFGInputField + targetFGInputLabel + closeDiv + closeDiv + closeDiv +
      row + s12Column + inputFieldColS6 + abvInputField + abvInputLabel +
      closeDiv + inputFieldColS6 + ibuInputField + ibuInputLabel + closeDiv +
      closeDiv + closeDiv + row + s12Column + h5Hydrometer + closeDiv +
      closeDiv + row + s12Column + inputFieldColS6 + preBoilInputField +
      preBoilInputLabel + closeDiv + inputFieldColS6 + postBoilInputField +
      postBoilInputLabel + closeDiv + closeDiv + closeDiv + row + s12Column +
      inputFieldColS6 + rackedInputField + rackedInputLabel + closeDiv +
      inputFieldColS6 + finalInputField + finalInputLabel + closeDiv + closeDiv
      + closeDiv + row + s12Column + h5OtherNotes + closeDiv + closeDiv + row +
      formS12 + inputFieldColS12 + otherNotesTextarea + closeDiv +
      closeDiv + closeForm + closeDiv + closeDiv)).hide().fadeIn(800);
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
    $mainArea.append('<div class="col s6"><h5>Hops</h5></div></div><div class="row"><div class="col s6">\
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
    $mainArea.append($addGrainsDoneButton);
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
      if ($xhr.status !== 200) {
          return;
      }
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
    Materialize.toast('Click the beer style for details', 4000)
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
      $('.styleQuestionButton').hide();
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

  loadStyleQuestion();

})();
