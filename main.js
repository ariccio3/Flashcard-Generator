var fs = require("fs");
var inquirer = require("inquirer");
var questionArray = [];
var score = 0;
var BasicCard = require("./BasicCard.js");
var basicJSON = require("./basic.json");
// var clozeQuestions = require("./cloze.js").clozeQuestions;
// var clozeCard = require("./ClozeCard.js");

var flashCardCLI = function() {

  inquirer.prompt([{

    type: "list",
    name: "options",
    message: "Would you like Basic flash cards or Cloze sytle flash cards?",
    choices: ["Basic", "Cloze"]

  }]).then(function(response){
    if(response.options === "Basic"){
      askQuestion();
      
    } else if(response.options === "cloze"){
      //run cloze function
    }
  });
}
flashCardCLI();

// make basic flash cards
// var loop = 0;
// var askQuestion = function(){ 
// 	this.getData = function() {
//     fs.readFile("basic.json", "utf8", function(error, data) {
//       console.log(data);
// 	})
// }
// }
// askQuestion();

var questionArray = [];

var basicQ1 = new BasicCard("Who is the 5th President of the U.S.?", "James Monroe");
  questionArray.push(basicQ1);
var basicQ2 = new BasicCard("Who is the 10th President of the U.S.?", "John Tyler");
  questionArray.push(basicQ2);
var basicQ3 = new BasicCard("Who is the 15th President of the U.S.?", "James Buchanan");
  questionArray.push(basicQ3);
var basicQ4 = new BasicCard("Who is the 20th President of the U.S.?", "James Garfield");
  questionArray.push(basicQ4);
var basicQ5 = new BasicCard("Who is the 25th President of the U.S.?", "William McKinley");
  questionArray.push(basicQ5);

// var questionFront = basicQ1.front;
// var questionBack = basicQ1.back;
// // console.log(basicQ1.front);
// // basicQ1.printFront();
// // basicQ1.printBack();
var askQuestion = function(){ 
  inquirer.prompt([{

  	type: "input",
    name: "question",
    message: basicQ1.printFront()

}]).then(function(answer){
	
	if (answer.question.toLowerCase() === basicQ1.back.toLowerCase())
		basicQ1.printBack();
		loop++
		score++
} else {
	basicQ1.printBack();
}
)};



// if (i < questionArray.length){
//   var cardFront = questionArray[i].front;
//   var cardBack = questionArray[i].back;
//   console.log(cardFront);

//     //prompt questions with printFront
//     //then if correct printBack and score++ and i++, run function again
//           // if wrong printBack, i++, run function again


// } // if close
//   //else show stats








// 

// score = 0;
// count = 0;
// var askQuestion = function(){ 
//   if (count < 5){
// // for (var i = 0; i < questionArray.length; i++) {
// //  console.log(questionArray[i].front)
// //  var answer = process.argv[0];
// //  var back = questionArray[i].back;
// //  if (answer === back){
// //    score++
// //    askQuestion();
// //  }
// // }

// inquirer.prompt([
//       {
//         name: "answer",
//         message: questionArray[0].front
//       }
//     ]).then(function(answer) {
// if (answer === questionArray[0].back)
// count++;
// askQuestion();


// }
// }}
// askQuestion();

    



