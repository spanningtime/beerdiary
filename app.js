(function () {

  $(".dropdown-button").dropdown();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });



  var styleQuestion = $('<section class="center-align styleQuestion question">What style of beer are you making?<br><input class="styleQuestionInput"></input><br><button class = "styleQuestionButton">Next</button></section>');

  var nameQuestion = $('<section class="center-align nameQuestion question">What do you want to name your beer?<br><input class="nameQuestionInput"></input><br><button class="nameQuestionButton">Next</button></section>')

  var grainsQuestion = $('<section class="center-align grainsQuestion question">Enter your grain bill.<br><div class="row"><div class="col 12"></div><div class="input-field col s6"><input id="grainType" type="text">\
      <label for="grainType">Type</label></div><div class="input-field col s6">\
      <input id="grainAmount" type="text"><label for="grainAmount">Amount</label> </div></div></div>')
  var addGrainsButton = $('<div><a class="addGrainsButton btn-floating"><i class=" material-icons">\
  add</i></a></div>');



  var $startNewSession = $('.startNewSession');

  $startNewSession.click(function() {
    var questionAnswersArray = []

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
        $('.mainArea').append(grainsQuestion).hide().fadeIn(2000);
        $('#grainAmount').focus(function() {
          $('.mainArea').append(addGrainsButton);
          addGrainsButton.hide().fadeIn(2000);
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
