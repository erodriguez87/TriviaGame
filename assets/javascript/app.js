// Trivia Game
// ------------
var number = 30;
var intervalId;
var correct =[];
var answerRows = 
            "<div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A1' id='A1-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A2' id='A2-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A3' id='A3-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A4' id='A4-1'></div>";
$('.answerRow').html(answerRows);

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
            var score = 0;
            if ($('#jordan').prop('checked')===true){
              score++;
              correct += 'Jordan';
            } else; 
            if ($('#rockets').prop('checked')===true){
              score++;
              correct += 'Rockets';
            } else; 
            if ($('#mitchell').prop('checked')===true){
              score++;
              correct += 'Mitchell';
            } else; 
            if ($('#no').prop('checked')===true) {
            score++;
            correct += 'No';
            } else; 
          $(".scoreBoard").html("<h4>"+ 'Your final score is ' + score + ' out of 4' + "</h4>");
          var answerRows = 
            "<div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A1' id='A1-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A2' id='A2-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A3' id='A3-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A4' id='A4-1'></div>";
            $('.answerRow').html(answerRows);
          gameSet();
          number = 30;
          $(".timeBoard").html("<h1>" +"Time Left "+ number + " Seconds" + "</h1>");
          return;
        }
      }

      function gameSet(){
        var main = $("body");
        var btns = main.find(".A1");
        var btns2 = main.find(".A2");
        var btns3 = main.find(".A3");
        var btns4 = main.find(".A4");
        
          for (var i = 0; i < 4; i++) {         
            var question1 = game.questions[0];
            $(".Q1").html("<h4>" + question1 + "</h4>");
            var inputA1 = $("<h4>"+game.a1[i]+"</h4>");
            var inputQ1 = $("<input>");
            
            inputQ1.addClass("inputBtns");
            inputQ1.attr("type", 'radio');
            inputQ1.attr("id", game.a1[i]);
            inputQ1.attr("name", 'answer1');
    
            btns.append(inputQ1);
            btns.append(inputA1);
    
            //generate second questions buttons and answers
            var question2 = game.questions[1];
            $(".Q2").html("<h4>" + question2 + "</h4>");
            var inputA2 = $("<h4>"+game.a2[i]+"</h4>");
            var inputQ2 = $("<input>");
            
            inputQ2.addClass("inputBtns");
            inputQ2.attr("type", 'radio');
            inputQ2.attr("id", game.a2[i]);
            inputQ2.attr("name", 'answer2');
    
            btns2.append(inputQ2);
            btns2.append(inputA2);
    
            //generate third questions buttons and answers
            var question3 = game.questions[2];
            $(".Q3").html("<h4>" + question3 + "</h4>");
            var inputA3 = $("<h4>"+game.a3[i]+"</h4>");
            var inputQ3 = $("<input>");
            
            inputQ3.addClass("inputBtns");
            inputQ3.attr("type", 'radio');
            inputQ3.attr("id", game.a3[i]);
            inputQ3.attr("name", 'answer3');
    
            btns3.append(inputQ3);
            btns3.append(inputA3);
            
            //generate fourth questions buttons and answers
            var question4 = game.questions[3];
            $(".Q4").html("<h4>" + question4 + "</h4>");
            var inputA4 = $("<h4>"+game.a4[i]+"</h4>");
            var inputQ4 = $("<input>");
            
            inputQ4.addClass("inputBtns");
            inputQ4.attr("type", 'radio');
            inputQ4.attr("id", game.a4[i]);
            inputQ4.attr("name", 'answer4');
    
            btns4.append(inputQ4);
            btns4.append(inputA4);
          }
      }
      gameSet();
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);

    },
  }

  game.run();