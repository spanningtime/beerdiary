(function () {

  $(".dropdown-button").dropdown();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



  var styleQuestion = $('<section class="center-align styleQuestion question">What style of beer are you making?<br><input class="styleQuestionInput"></input><br><button class = "styleQuestionButton">Next</button></section>');

  var nameQuestion = $('<section class="center-align nameQuestion question">What do you want to name your beer?<br><input class="nameQuestionInput"></input><br><button class="nameQuestionButton">Next</button></section>')

  var grainsQuestion = $('<section class="center-align grainsQuestion question">Enter your grain bill.</section>')

  var addGrainsField = function() {
    $('.mainArea').append($('<div class="row"><div class="col 12"></div><div class="input-field col s6"><input class="grainType" type="text">\
        <label for="grainType">Type</label></div><div class="input-field col s6">\
        <input class="grainAmount" type="text"><label for="grainAmount">Amount</label> </div></div></div>'));
      };

  var addGrainsButton = $('<div><a class="addGrainsButton btn-floating"><i class=" material-icons">\
  add</i></a></div>');

  var hopsQuestion = $('<section class="center-align hopsQuestion question">Enter your hop bill.<br><div class="row"><div class="col 12"></div><div class="input-field col s6"><input id="hopType" type="text">\
      <label for="hopType">Type</label></div><div class="input-field col s6">\
      <input id="hopAmount" type="text"><label for="hopAmount">Amount</label> </div></div></div>')



  // <div class="row headerRow">
  //   <div class="col s4">
  //     <div class="input-field">
  //       <input id="brew_name" type="text">
  //       <label for="brew_name">Brew Name</label>
  //     </div>
  //   </div>
  //   <div class="col s4">
  //     <div class="input-field">
  //       <input id="beer_style" type="text">
  //       <label for="beer_style">Beer Style</label>
  //     </div>
  //   </div>
  //   <div class="col s4">
  //     <div class="input-field">
  //       <input id="brew_date" type="date" class="datepicker">
  //       <label for="brew_date">Brew Date</label>
  //     </div>
  //   </div>
  // </div>



  var $startNewSession = $('.startNewSession');

  $startNewSession.click(function() {
    var questionAnswersArray = [];
    var grainsArray = [];
    var hopsArray = [];
    var $sessionBeerDetails = $('<div class="row"><div id="brewName" class="col s4"></div>\
    <div id="beerStyle"class="col s4"></div><div class="col s4">\
    <h4>Date: 5/28/16</h4></div></div>');


    $startNewSession.hide();
    $('.mainArea').append(styleQuestion).hide().fadeIn(2000);
    $('.styleQuestionButton').click(function() {
      questionAnswersArray.push($('.styleQuestionInput').val())
      console.log(questionAnswersArray);
      $('.styleQuestion').hide();
      $('.mainArea').append(nameQuestion).hide().fadeIn(2000);
      $('.nameQuestionButton').click(function() {
        questionAnswersArray.push($('.nameQuestionInput').val())
        console.log(questionAnswersArray);
        $('.nameQuestion').hide();
        $('.mainArea').prepend($sessionBeerDetails);
        $('#brewName').append('<h4> Name: ' + questionAnswersArray[1] + '</h4>')
        $('#beerStyle').append('<h4> Style: ' + questionAnswersArray[0] + '</h4>')
        $('.mainArea').append(grainsQuestion).hide().fadeIn(2000);
        addGrainsField();
        $('.grainAmount').focus(function() {
          $('.mainArea').append(addGrainsButton);
          addGrainsButton.hide().fadeIn(2000);
          addGrainsButton.click(function() {
            grainsArray.push({Type: $('.grainType').last().val(), Amount: $('.grainAmount').last().val()})
            addGrainsField();
            $('.mainArea').append(addGrainsButton);
            console.log(grainsArray);
          })
        })
      })
    })
  })





  var grainsArray = [];
  var renderGrainsInput = function() {
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
    renderGrainsInput();

  });







})();
