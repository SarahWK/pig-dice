// //busines logic
var Player1 = "";
var Player2 = "";

function diceValue(roll, "",) {
   this.roll = roll;
   this.total="";
 }


 //User Interface logic
 $(document).ready(function() {
   $("form#new-Player").submit(function(event){
       event.preventDefault();
var Player1 =  $(".Player1").val();
     $("#Player1").text(Player1);

var Player2 =  $(".Player2").val();
          $("#Player2").text(Player2);
   });

 });

//Generate a number from 1 to 6
    rollValue: function(dice) {
        var rolledValue = Math.floor((Math.random() * 6) + 1;
        return rolledValue;
    },
//Calculate the total
    diceReturn: function() {
       var diceTotal = 0;
       diceTotal += this.roll($('#dice1'));
       diceTotal += this.rollDie($('#dice2'));
       return diceTotal;
    },
//If they decide to hold return nothing
    rollHold: function() {
       var dice1 = 0;
       var dice2 = 0;
       var numRolls = 0;
        return numRolls;
    },




  // //global variables for later number access
  // var player = 0;
  //
  // function calculateDice(index)
  // {
  //     //get the image with the specified index
  //     var image = document.getElementById("dice" + index);
  //     //calculate a number from 1 to 6
  //     var number = Math.floor((Math.random() * 6)) + 1;
  //
  //     window["diceValue" + index] = number; //assign global vars
  //     image.src = "../images/images.png" + number + ".dice1"; //assign image
  //     image.alt = number.toString(); //assign alt
  // }

  //
