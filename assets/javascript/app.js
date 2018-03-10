// Trivia Game
// ------------
var number = 30;
var intervalId;
  


  var game = {
    test: 1,
    questions: [
    'Who is the GOAT',
    'Who will win the championship',
    'who is the best rookie?',
    'will the spurs make the playoffs',
    ],
    a1:['jordan','kareem','shaq','kobe'],
    a2:['warriors','cavs','heat','rockets'],
    a3:['warriors','cavs','heat','rockets'],

    

    run: function() {
    //  The decrement function().
    function decrement() {
      number--;
      console.log(number)
      $(".timeBoard").html("<h2>" +"Time Left "+ number + " Seconds" + "</h2>");
      if (number === 0) {
        alert("Time Up!");
      }
    }
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    },
      
    reset: function() {
      console.log('game.questions', game.questions);
      console.log('game.questions', game.questions[1]);
      var question1 = game.questions[Math.floor(Math.random()*(game.questions.length)+1)];
      console.log(question1);
      $(".Q1").html("<h4>" + question1 + "</h4>");
    }


  }