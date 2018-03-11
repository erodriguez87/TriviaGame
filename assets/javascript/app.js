// Trivia Game
// ------------
var number = 30;
var intervalId;
  


  var game = {
    questions: [
    'Who is the GOAT?',
    'Who will win the championship?',
    'who is the best rookie?',
    'will the spurs make the playoffs?',
    ],
    a1:['jordan','kareem','shaq','kobe','jordan'],
    a2:['warriors','cavs','heat','rockets','rockets'],
    a3:['mitchell','simmons','kuzma','lonzo','mitchell'],
    a4:['no','yes','no','no'],

    

    run: function() {
    //  The decrement function().
      function decrement() {  
        number--;
        $(".timeBoard").html("<h1>" +"Time Left "+ number + " Seconds" + "</h1>");
          if (number === 0) {
            alert("Time Up!");
            return;
        }
      }
      
      //Question 1 and answers
      var question1 = game.questions[0];
      $(".Q1").html("<h3>" + question1 + "</h3>");
      $("#A1-1").html("<div>"+"<h3>"+game.a1[0]+"</h3>"+"</div>"+ "<input type='radio' name='Answer1'>"); console.log(game.a1[0]);
      $("#A1-2").html("<div>"+"<h3>"+game.a1[1]+"</h3>"+"</div>" + "<input type='radio' name='Answer1'>"); console.log(game.a1[1]);
      $("#A1-3").html("<div>"+"<h3>"+game.a1[2]+"</h3>"+"</div>" + "<input type='radio' name='Answer1'>");
      $("#A1-4").html("<div>"+"<h3>"+game.a1[3]+"</h3>"+"</div>" + "<input type='radio' name='Answer1'>");

      //Question 2 and answers
      var question2 = game.questions[1];
      $(".Q2").html("<h3>" + question2 + "</h3>");
      $("#A2-1").html("<div>"+"<h3>"+game.a2[0]+"</h3>"+"</div>" + "<input type='radio' name='Answer2'>");
      $("#A2-2").html("<div>"+"<h3>"+game.a2[1]+"</h3>"+"</div>" + "<input type='radio' name='Answer2'>");
      $("#A2-3").html("<div>"+"<h3>"+game.a2[2]+"</h3>"+"</div>" + "<input type='radio' name='Answer2'>");
      $("#A2-4").html("<div>"+"<h3>"+game.a2[3]+"</h3>"+"</div>" + "<input type='radio' name='Answer2'>");
     
      //Question 3 and answers
      var question3 = game.questions[2];
      $(".Q3").html("<h3>" + question3 + "</h3>");
      $("#A3-1").html("<div>"+"<h3>"+game.a3[0]+"</h3>"+"</div>" + "<input type='radio' name='Answer3'>");
      $("#A3-2").html("<div>"+"<h3>"+game.a3[1]+"</h3>"+"</div>" + "<input type='radio' name='Answer3'>");
      $("#A3-3").html("<div>"+"<h3>"+game.a3[2]+"</h3>"+"</div>" + "<input type='radio' name='Answer3'>");
      $("#A3-4").html("<div>"+"<h3>"+game.a3[3]+"</h3>"+"</div>" + "<input type='radio' name='Answer3'>");

      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);

    },

  }

  game.run();